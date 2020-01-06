# Example

This is an example of the `@estimote/react-native-proximity` library using an expo bare workflow. It currently has Expo SDK 36, which uses React Native 0.61 and React 16.9.

To clone and run the example, do the following:

```sh
git clone https://github.com/Estimote/react-native-proximity
cd expo-example
yarn

cd ios
pod install

cd ..
yarn ios --device
// or
yarn android
```

hi

Make sure an iPhone is plugged in if you use the `--device` flag.
