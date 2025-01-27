module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'module-resolver', // https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
    'react-native-reanimated/plugin', // ! `react-native-reanimated/plugin` has to be listed last.
  ],
};
