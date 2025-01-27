import { useCallback, useState } from 'react';
import Geolocation, {
  type GeoCoordinates,
  type GeoOptions,
} from 'react-native-geolocation-service';
import { withLocationPermissions } from '../permissions';
import { useReverseGeocode } from './location.slice';
import type { Location } from 'shared/kernel';

const options: GeoOptions = {
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 10000,
};

export const requestCurrentPosition = withLocationPermissions(
  async function requestCurrentPosition() {
    return new Promise<GeoCoordinates>((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (error) => {
          reject(error);
        },
        options,
      );
    });
  },
);

export const useGetCurrentPosition = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentPosition = useCallback(async () => {
    try {
      setIsLoading(true);
      return await requestCurrentPosition();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isPositionLoading: isLoading,
    getCurrentPosition,
  };
};

export const useLocation = (): {
  isLoading: boolean;
  getLocation: () => Promise<Location | undefined>;
} => {
  const { isPositionLoading, getCurrentPosition } = useGetCurrentPosition();
  const [reverseGeocode, { isFetching }] = useReverseGeocode();

  const getLocation = async () => {
    const coords = await getCurrentPosition();
    if (!coords) {
      return;
    }
    const coordinate = {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };

    try {
      const [address] = await reverseGeocode(coordinate).unwrap();
      return {
        address,
        coordinate,
      };
    } catch (error) {
      return {
        coordinate,
      };
    }
  };

  return {
    isLoading: isPositionLoading || isFetching,
    getLocation,
  };
};

export const getLocationText = ({ address, coordinate }: Location) => {
  if (address) {
    return address;
  }
  if (coordinate) {
    return `${coordinate.latitude}, ${coordinate.longitude}`;
  }
  return undefined;
};
