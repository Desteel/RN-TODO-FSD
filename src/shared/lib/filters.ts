const INITIAL_FILTER = undefined;

type Filter<Value> = (value: Value) => boolean;

/**
 * @example
 * type ListItem = {
 *  isReady: boolean,
 *  count: number
 * };
 *
 * const filterBuilder = createFilterBuilder<ListItem>();
 *
 * filterBuilder.addFilter(({ isReady }) => isReady);
 * filterBuilder.addFilter(({ count }) => count > 5);
 *
 * const filter = filterBuilder.build();
 * if (filter) {
 *    const filteredList = list.filter(filter)
 * }
 */
export const createFilterBuilder = <Value>() => {
  let _filter: Filter<Value> | undefined = INITIAL_FILTER;

  const addFilter = (filter: Filter<Value>) => {
    if (_filter) {
      const prevFilter = _filter;
      const newFilter: Filter<Value> = (payload) => {
        return prevFilter(payload) && filter(payload);
      };
      _filter = newFilter;
    } else {
      _filter = filter;
    }
  };

  const build = () => {
    const result = _filter;
    _filter = INITIAL_FILTER;

    return result;
  };

  return {
    build,
    addFilter,
  };
};
