# Mobile

### Environment

_Tip: Use Chocolatey._

* nodejs-lts
* yarn
* python2
* jdk8 (downgrade if a newer version is installed)

### Install React Native CLI globally

```
yarn global add react-native-cli
```

### Install Android Studio on Windows

Ref.: https://react-native.rocketseat.dev/android/windows

Create env variables:
* `JAVA_HOME`: JDK 1.8 path (i.e. `C:\Program Files\Java\jdk1.8.0_172`) [not \bin].
* `ANDROID_HOME`: a custom Android SDK path without spaces (i.e. `c:\Android\SDK`).

Custom setup:
* Use JDK in `JAVA_HOME` variable (do not use the default).
* Use SDK in `ANDROID_HOME` variable (do not use the default).
* Select SDK, the SDK Platform, Intel HAXM (the Emulator Accelerator, if available), and AVD.

When running first time, React Native will check the SDK Platform (will install if not yet installed; you should use SDK Manager instead).
React Native at April '20 use SDK Platform 28, not the updated SDK 29.

### Creating an empty project

```
react-native init ____project-name____
```
Running:
```
react-native run-android
```
