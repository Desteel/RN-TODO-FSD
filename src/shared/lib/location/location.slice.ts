import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { reverseGeocode } from 'shared/infrastructure/api';
import type { Coordinates } from 'shared/kernel';

export type ReadableAddresses = string[];

const {
  reducer: locationReducer,
  middleware: locationMiddleware,
  useLazyReverseGeocodeQuery: useReverseGeocode,
} = createApi({
  reducerPath: 'location',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    reverseGeocode: builder.query<ReadableAddresses, Coordinates>({
      queryFn: async (coordinates) => {
        try {
          const results = await reverseGeocode(coordinates);

          return { data: results };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export { locationReducer, locationMiddleware, useReverseGeocode };
