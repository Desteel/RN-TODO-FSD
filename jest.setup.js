require('react-native-reanimated').setUpTests({ fps: 60 });

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockResolvedValue(),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: { source: 0 },
      brand: { source: 0 },
    }),
  };
});

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);

beforeEach(() => {
  const mmkvMock = require('react-native-mmkv-storage/jest/dist/jest/memoryStore.js');
  mmkvMock.unmock();
  mmkvMock.mock();
});
