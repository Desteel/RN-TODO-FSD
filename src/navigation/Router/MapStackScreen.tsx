import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MapPage } from '../pages/MapPage';
import { stackScreenOptions } from './Router.constants';
import type { MapStackParamList } from '../navigation.types';

const MapStack = createNativeStackNavigator<MapStackParamList>();

const mapOptions = { title: 'Map' };

export function MapStackScreen() {
  return (
    <MapStack.Navigator
      screenOptions={stackScreenOptions}
      initialRouteName="Map"
    >
      <MapStack.Screen name="Map" component={MapPage} options={mapOptions} />
    </MapStack.Navigator>
  );
}
