# capacitor-plugin-app-tracking-transparency

<a href="https://www.npmjs.com/package/capacitor-plugin-app-tracking-transparency">
  <img src="https://img.shields.io/npm/l/capacitor-plugin-app-tracking-transparency?style=flat-square" />
</a>
<a href="https://www.npmjs.com/package/capacitor-plugin-app-tracking-transparency">
  <img src="https://img.shields.io/npm/dw/capacitor-plugin-app-tracking-transparency?style=flat-square" />
</a>
<a href="https://www.npmjs.com/package/capacitor-plugin-app-tracking-transparency">
  <img src="https://img.shields.io/npm/v/capacitor-plugin-app-tracking-transparency?style=flat-square" />
</a>

Capacitor plugin to request user authorization to access app-related data for tracking the user or the device. iOS only.

Read more about Apple's App Tracking Transparency framework [here](https://developer.apple.com/documentation/apptrackingtransparency). Also [this](https://developer.apple.com/app-store/user-privacy-and-data-use/) might be a good read.

## Platform support

iOS only but with web fallback for development purposes.

## Plugin versions

### Version 3.x (Swift Package Manager)

Version 3.x introduces Swift Package Manager support, which is the recommended installation method for Capacitor 7 and 8.

| Capacitor version | Plugin version |
| ----------------- | -------------- |
| 7.x / 8.x         | 3.x            |

### Version 2.x (CocoaPods)

If your project uses CocoaPods for iOS dependency management, use version 2.x. See [branch v2](https://github.com/mahnuh/capacitor-plugin-app-tracking-transparency/tree/v2) for documentation.

| Capacitor version     | Plugin version |
| --------------------- | -------------- |
| 4.x / 5.x / 6.x / 7.x | 2.x            |
| 3.x                   | >= 2.0.0       |

### Version 1.x (Legacy)

For Capacitor versions prior to 3.0.0, use plugin version 1.x. See [branch v1](https://github.com/mahnuh/capacitor-plugin-app-tracking-transparency/tree/v1) for documentation.

## Maintainers

| Maintainer      | GitHub                              |                                          |
| --------------- | ----------------------------------- | ---------------------------------------- |
| Manuel Heidrich | [mahnuh](https://github.com/mahnuh) | [Sprintwerk GmbH](https://sprintwerk.de) |

## Install

```bash
npm install capacitor-plugin-app-tracking-transparency
npx cap sync
```

## Configuration

Add this to your app's Info.plist and update the message according to your needs:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>Your data will be used to deliver personalized ads to you.</string>
```

This message can be provided in multiple languages by using a `InfoPlist.strings` file. See the [Apple docs](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html) or [this stack overflow answer](https://stackoverflow.com/a/25736915) for help.

## Example App

An example app is included in the `example/` directory. To run it:

1. Install dependencies:

   ```bash
   cd example
   npm install
   ```

2. Build and sync:

   ```bash
   npm run build
   npx cap sync ios
   ```

3. Open in Xcode:

   ```bash
   npx cap open ios
   ```

4. Run on a simulator or device (iOS 14+)

## Usage

```typescript
import {
  AppTrackingTransparency,
  AppTrackingStatusResponse,
} from 'capacitor-plugin-app-tracking-transparency';

...

public async getStatus(): Promise<AppTrackingStatusResponse> {
  const response = await AppTrackingTransparency.getStatus();

  console.log(response);
  // { status: 'authorized' } for example

  return response;
}

public async requestPermission(): Promise<AppTrackingStatusResponse> {
  const response = await AppTrackingTransparency.requestPermission();

  console.log(response);
  // { status: 'authorized' } for example

  return response;
}
```

Both available methods return `AppTrackingStatusResponse` with `status: AppTrackingStatus`, which will be one of the following: `authorized`, `denied`, `notDetermined` or `restricted`. See [Apple's docs](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus) for reference.

## API

<docgen-index>

- [`getStatus()`](#getstatus)
- [`requestPermission()`](#requestpermission)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getStatus()

```typescript
getStatus() => Promise<AppTrackingStatusResponse>
```

**Returns:** <code>Promise&lt;<a href="#apptrackingstatusresponse">AppTrackingStatusResponse</a>&gt;</code>

---

### requestPermission()

```typescript
requestPermission() => Promise<AppTrackingStatusResponse>
```

**Returns:** <code>Promise&lt;<a href="#apptrackingstatusresponse">AppTrackingStatusResponse</a>&gt;</code>

---

### Type Aliases

#### AppTrackingStatusResponse

<code>{ status: <a href="#apptrackingstatus">AppTrackingStatus</a> }</code>

#### AppTrackingStatus

<code>'authorized' | 'denied' | 'notDetermined' | 'restricted'</code>

</docgen-api>

## Todos

- [x] Extend API docs

## License

[MIT](https://github.com/mahnuh/capacitor-plugin-app-tracking-transparency/blob/main/LICENSE)
