# Description

Simple React Native ToDo application with an exaggerated adherence to FSD

# Getting Started

## Step 1: Start the Metro Server

```bash
yarn start
```

## Step 2: Start your Application

Open a new terminal from the _root_ of the project.

### Android

```bash
yarn android
```

### iOS

```bash
yarn ios
```

If everything is ok, you will see the app running in _Android Emulator_ or _iOS Simulator_

You can also run it directly from within Android Studio and Xcode respectively.

# Debug

- [Debugging](https://reactnative.dev/docs/debugging)
- [Flipper](https://fbflipper.com/docs/features/react-native/)
- [Download Flipper v0.201.0](https://github.com/facebook/flipper/releases/tag/v0.201.0)

## Flipper Plugins Used

Only installation in Flipper is required

- [react-navigation](https://reactnavigation.org/docs/devtools/#useflipper)
- [redux](https://github.com/jk-gan/flipper-plugin-redux-debugger)
- [react-native-mmkv-storage](https://github.com/pnthach95/flipper-plugin-react-native-mmkv-storage?tab=readme-ov-file#install)

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## react-native-geolocation-service

`patches/react-native-geolocation-service+5.3.1.patch` is used to fix the error `Could not invoke RNFusedLocation`.
The error is caused by the version of `play-services-location` in other packages, in this particular case in `react-native-maps`.

Related issues:

- https://github.com/react-native-maps/react-native-maps/pull/4858#issuecomment-1777470683
- https://github.com/Agontuk/react-native-geolocation-service/issues/398
- https://github.com/Agontuk/react-native-geolocation-service/issues/431

# Testing

- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/guides/testing)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/guides/testing)

# Google Maps API Key

You have to [generate](https://developers.google.com/maps/documentation/android-sdk/get-api-key) your own Google Maps API Key and [add it](#environment) in `env.local` file.

```
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

# Environment

Use `.env` files to define the required variables.

> Do not put sensitive values in `.env` files, except for `.env.local`.
>
> If it is meant that you should have your own sensitive value for some variable, create the `env.local` copy of the `.env` file in the root of the project and put the variable in this file. After this is done, call `yarn set-env:local` before launching the application.
>
> Make sure that `.env.local` is specified in `.gitignore`.

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```
