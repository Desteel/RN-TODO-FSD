import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { type UserDTO, authenticate } from 'shared/infrastructure/api';
import type { User, UserCredentials } from './authentication.types';

const CACHE_KEY_AUTHENTICATE = 'authentication';

const formatUser = ({ id, username, token }: UserDTO): User => {
  return { id: String(id), login: username, token };
};

const {
  reducer: authenticationReducer,
  middleware: authenticationMiddleware,
  useAuthenticateMutation,
} = createApi({
  reducerPath: 'authentication',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    authenticate: builder.mutation<User, UserCredentials>({
      queryFn: async ({ login, password }) => {
        try {
          const user = await authenticate({ username: login, password });
          return { data: formatUser(user) };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const useAuthenticate = () => {
  return useAuthenticateMutation({
    fixedCacheKey: CACHE_KEY_AUTHENTICATE,
  });
};

export { authenticationReducer, authenticationMiddleware };
