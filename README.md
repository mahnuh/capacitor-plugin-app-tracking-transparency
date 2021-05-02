# capacitor-plugin-app-tracking-transparency

<a href="https://www.npmjs.com/package/capacitor-plugin-app-tracking-transparency"><img src="https://img.shields.io/npm/l/capacitor-plugin-app-tracking-transparency?style=flat-square" /></a>
<a href="https://www.npmjs.com/package/capacitor-plugin-app-tracking-transparency"><img src="https://img.shields.io/npm/dw/capacitor-plugin-app-tracking-transparency?style=flat-square" /></a>
<a href="https://www.npmjs.com/package/capacitor-plugin-app-tracking-transparency"><img src="https://img.shields.io/npm/v/capacitor-plugin-app-tracking-transparency?style=flat-square" /></a>

Capacitor plugin to request user authorization to access app-related data for tracking the user or the device.

## Platform support

iOS only but with web fallback for development purposes.

## Maintainers

| Maintainer | GitHub                                    | Social                                        |
| ---------- | ----------------------------------------- | --------------------------------------------- |
| Manuel Heidrich | [mahnuh](https://github.com/mahnuh) | [@mahnuh](https://twitter.com/mahnuh) |
| prototype.berlin GmbH | [prototype-berlin](https://github.com/prototype-berlin) | [@prototypeberlin](https://twitter.com/prototypeberlin) |

## Install

```bash
npm install capacitor-plugin-app-tracking-transparency
npx cap sync
```

## Configuration

Add this to your app's Info.plist and update the message according to your needs:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>Your data will be used to deliver personalized apps to you.</string>
```

## API

<docgen-index>

* [`getStatus()`](#getstatus)
* [`requestPermission()`](#requestpermission)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getStatus()

```typescript
getStatus() => any
```

**Returns:** <code>any</code>

--------------------


### requestPermission()

```typescript
requestPermission() => any
```

**Returns:** <code>any</code>

--------------------

</docgen-api>

## License

[MIT](https://github.com/mahnuh/capacitor-plugin-app-tracking-transparency/blob/main/LICENSE).
