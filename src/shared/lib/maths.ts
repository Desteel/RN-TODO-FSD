/**
 * a / b = c / x
 *
 * x = (b * c) / a
 *
 * @returns x
 */
export const calcProportion = (a: number, b: number, c: number): number => {
  return (b * c) / a;
};

export const getRandomInteger = (min: number, max: number): number => {
  const minInteger = Math.ceil(min);
  const maxInteger = Math.floor(max);

  return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
};
