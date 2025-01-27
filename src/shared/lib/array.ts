export const getTailIndex = <Item>(list: Item[]): number => {
  return list.length - 1;
};

export const getTail = <Item>(list: Item[]): Item => {
  return list[getTailIndex(list)];
};
