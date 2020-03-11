# LabFollow

Insert screenshots here

## Introduction

LabFollow is a mobile app designed to emphasise the communication between doctors and their patients via studies. Studies are personalised sets of questions created by a doctor for a patient, who then answers them and send them back to their doctor.

The goal is to create a new way of dialogue between a doctor and its patient: one which would be not be time-consuming and which would be easy to understand and use.

It would also facilitate the gathering of data (while respecting the patients’ privacy) to help doctors know what they should be improving in their own work.


## Requirements

To have this app running, you need the following tools installed:
- node & npm
- watchman (iOS)
- Xcode (iOS)
- Android Studio (Android)


## Building

First, please refer to [LabFollow BackEnd](./back_end) to prepare the server.

Then, at the root of the [LabFollow FrontEnd](./front_end), install all the dependencies with:

```bash
$ npm i
```

In `app/network/index.js`, replace `XXX.XXX.XXX.XXX` with your own IP address. (localhost won't work so use the local IP)

Then start running:

```bash
$ npm start
```

<Details><Summary><strong>Running on iOS</strong></Summary>

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

</Details>

<Details><Summary><strong>Running on Android</strong></Summary>

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

</Details>

## Author

- [Paul Monnery](https://github.com/PaulMonnery)
- [Laurane Sevin](https://github.com/Lauranosaure)