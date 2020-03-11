# LabFollow FontEnd: React Native

## Install Node dependencies:

```bash
$ npm i
```

In `app/network/index.js`, replace `XXX.XXX.XXX.XXX` with your own IP address. (localhost won't work so use the local IP)

Then running:

```bash
$ npm start
```

## Running on iOS

If you want to run it on a specific device, plug it in and execute the following command in a new terminal:

```bash
$ react-native run-ios --device="DEVICE NAME"
```

Replace DEVICE NAME with the name of your device.

If you want to run it on simulator, use this:

```bash
$ react-native run-ios --simulator="iPhone 11 Pro Max"
```

You can replace 'iPhone 11 Pro Max' with the iPhone of your choice.


## Running on Android

If you want to run it on the emulator, first launch the one you want, eather from Android studio or in a terminal:

```bash
# in Android Studio
ADV Manager > Your device > Actions > Launch the AVD on the emulator

# in command line
$ ~/.Android/emulator/emulator -avd DEVICE_NAME -netdelay none -netspeed full
```

And then just run in a new terminal:

```bash
$ react-native run-android
```
