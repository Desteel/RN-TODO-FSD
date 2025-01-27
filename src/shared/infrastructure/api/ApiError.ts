export type SchemaError = Array<{
  path: string;
  message: string;
}>;

export type ApiError = Error &
  Partial<{
    schemaError: SchemaError;
  }>;
