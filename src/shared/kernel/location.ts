export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Location = Partial<{
  address: string;
  coordinate: Coordinates;
}>;
