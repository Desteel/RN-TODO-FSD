import { z } from 'zod';
import { mapsAPIKey } from 'shared/config';
import { createApiError } from '../lib';
import type { Coordinates } from 'shared/kernel';

// https://developers.google.com/maps/documentation/geocoding/requests-geocoding
// https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding

const geocodeSchema = z
  .object({
    results: z.array(
      z.object({
        formatted_address: z.string(),
      }),
    ),
    status: z.union([
      z.literal('OK'),
      z.literal('ZERO_RESULTS'),
      z.literal('OVER_QUERY_LIMIT'),
      z.literal('REQUEST_DENIED'),
      z.literal('INVALID_REQUEST'),
      z.literal('UNKNOWN_ERROR'),
    ]),
    error_message: z.optional(z.string()),
  })
  .transform(({ results, status, error_message }) => {
    return {
      addresses: results.map(({ formatted_address }) => formatted_address),
      status,
      errorMessage: error_message,
    };
  });

type GeocodeDTO = z.infer<typeof geocodeSchema>;

export type ReversedGeocodeDTO = GeocodeDTO['addresses'];

export const reverseGeocode = async ({
  latitude,
  longitude,
}: Coordinates): Promise<ReversedGeocodeDTO> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${mapsAPIKey}`,
    );

    const data = await response.json();

    const { addresses, errorMessage } = geocodeSchema.parse(data);
    if (errorMessage) {
      throw createApiError(new Error(errorMessage));
    }
    return addresses;
  } catch (error) {
    throw createApiError(error);
  }
};
