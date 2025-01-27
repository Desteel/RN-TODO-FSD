import { useAuthenticate } from './authentication.slice';

export const useUser = () => {
  const [_, { data }] = useAuthenticate();
  return data;
};

export const useIsSignedIn = () => {
  const user = useUser();

  return !!user?.token;
};
