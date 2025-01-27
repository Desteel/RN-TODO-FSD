import { z } from 'zod';
import { isNil } from './typeGuards';

export type ValidateNumberOptions = Partial<{
  onlyInteger: boolean;
  min: number;
  max: number;
}>;

export const validateNumber = (
  value: number,
  { onlyInteger, min, max }: ValidateNumberOptions = {},
): boolean => {
  let num = z.number();

  if (onlyInteger) {
    num = num.int();
  }
  if (!isNil(min)) {
    num = num.min(min);
  }
  if (!isNil(max)) {
    num = num.max(max);
  }

  return num.safeParse(value).success;
};
