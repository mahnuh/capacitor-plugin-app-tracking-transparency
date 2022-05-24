import Foundation
import Capacitor
import AppTrackingTransparency

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AppTrackingTransparencyPlugin)
public class AppTrackingTransparencyPlugin: CAPPlugin {
    private let implementation = AppTrackingTransparency()

    @objc func getStatus(_ call: CAPPluginCall) {
        if #available(iOS 14.0, *) {
            let status : ATTrackingManager.AuthorizationStatus = ATTrackingManager.trackingAuthorizationStatus
            call.resolve([
                "status": status.rawValue == 0 ? "notDetermined" : status.rawValue == 1 ? "restricted" : status.rawValue == 2 ? "denied" : status.rawValue == 3 ? "authorized" : ""
            ])
        } else {
            call.resolve([ "status": "authorized" ])
        }
    }

    @objc func requestPermission(_ call: CAPPluginCall) {
        if #available(iOS 14.0, *) {
            ATTrackingManager.requestTrackingAuthorization { (res) in
                let status = res
                call.resolve([
                    "status": status.rawValue == 0 ? "notDetermined" : status.rawValue == 1 ? "restricted" : status.rawValue == 2 ? "denied" : status.rawValue == 3 ? "authorized" : ""
                ])
            }
        } else {
            call.resolve([ "status": "authorized" ])
        }
    }
}
