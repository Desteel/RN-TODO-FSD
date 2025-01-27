const BASE_URL = 'https://dummyjson.com/';

export const createURL = (url: string) => {
  return new URL(url, BASE_URL).toString();
};
