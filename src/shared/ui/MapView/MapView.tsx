import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useColorScheme } from 'react-native';
import MapViewBase, {
  type MapViewProps as MapViewBaseProps,
  type EdgePadding,
  type Provider,
} from 'react-native-maps';
import { styles } from './MapView.styles';
import { Marker } from './Marker';

const MAP_PROVIDER: Provider = undefined;

export type MapViewProps = Omit<
  MapViewBaseProps,
  'mapPadding' | 'style' | 'provider' | 'userInterfaceStyle'
> &
  Partial<{
    initialMarkerId: string;
    mapPadding: Partial<EdgePadding>;
  }>;

export const MapView = Object.assign(
  forwardRef<MapViewBase, MapViewProps>(function MapView(
    { initialMarkerId, mapPadding, ...props },
    ref,
  ) {
    const colorScheme = useColorScheme();
    const mapRef = useRef<MapViewBase>(null);

    useImperativeHandle(ref, () => mapRef.current!, []);

    useEffect(() => {
      if (initialMarkerId) {
        mapRef.current?.fitToSuppliedMarkers([initialMarkerId]);
      }
    }, [initialMarkerId]);

    return (
      <MapViewBase
        ref={mapRef}
        mapPadding={mapPadding as EdgePadding}
        style={styles.map}
        userInterfaceStyle={colorScheme || undefined}
        provider={MAP_PROVIDER}
        {...props}
      />
    );
  }),

  { Marker },
);
