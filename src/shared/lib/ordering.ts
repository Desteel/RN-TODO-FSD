import { getTail } from './array';
import type { OrderedItem } from 'shared/kernel';

const checkIsOrderedListReversed = <Item extends OrderedItem>(list: Item[]) => {
  const [head] = list;
  const tail = getTail(list);

  return head.order > tail.order;
};

const BASE_ORDER_MODIFIER = 1;

export type ReorderItemsPayload<Item extends OrderedItem> = {
  sortedItems: Item[];
  from: number;
  to: number;
};

export const reorderItems = <Item extends OrderedItem>({
  sortedItems,
  from,
  to,
}: ReorderItemsPayload<Item>) => {
  if (from === to) {
    return sortedItems;
  }

  const isReversed = checkIsOrderedListReversed(sortedItems);

  const itemFrom = sortedItems[from];
  const itemTo = sortedItems[to];

  const movedItem = { ...itemFrom, order: itemTo.order };

  const isOrderIncreased = itemFrom.order < itemTo.order;

  const { start, end } = (() => {
    if (isReversed) {
      return {
        start: isOrderIncreased ? to : from + 1,
        end: isOrderIncreased ? from - 1 : to,
      };
    }
    return {
      start: isOrderIncreased ? from + 1 : to,
      end: isOrderIncreased ? to : from - 1,
    };
  })();

  const orderModifier = isOrderIncreased
    ? -BASE_ORDER_MODIFIER
    : BASE_ORDER_MODIFIER;

  const reorderedItems: Item[] = [movedItem];

  for (let i = start; i <= end; i++) {
    const item = sortedItems[i];
    reorderedItems.push({ ...item, order: item.order + orderModifier });
  }

  return reorderedItems;
};
