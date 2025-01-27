export type Storage = {
  getItem: (key: string) => Promise<string>;
  setItem: (key: string, item: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
};
