import Config from 'react-native-config';

const getConfigVariableValue = (key: string) => {
  const value = Config[key];

  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};

export const isProductionEnv = process.env.NODE_ENV === 'production';

export const mapsAPIKey = getConfigVariableValue('GOOGLE_MAPS_API_KEY');
