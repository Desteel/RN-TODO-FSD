import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

export const generateID = () => {
  return nanoid();
};
