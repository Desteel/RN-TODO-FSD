type Nullable<Obj extends Record<string, unknown>> = {
  [Key in keyof Obj]: Obj[Key] | null;
};

type StringNumber<Value extends number = number> = `${Value}`;
