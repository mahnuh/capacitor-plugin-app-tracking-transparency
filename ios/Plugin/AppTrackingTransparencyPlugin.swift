import Foundation
import Capacitor
import AppTrackingTransparency

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
        self.removeObserver()
        
        if #available(iOS 14, *) {
            ATTrackingManager.requestTrackingAuthorization {
                [weak self] status in
                
                if status == .denied,
                   ATTrackingManager.trackingAuthorizationStatus == .notDetermined {
                    debugPrint("iOS 17.4 authorization bug detected")
                    self?.addObserver(call)
                    return
                }
                                
                call.resolve([
                    "status": status.rawValue == 0 ? "notDetermined" : status.rawValue == 1 ? "restricted" : status.rawValue == 2 ? "denied" : status.rawValue == 3 ? "authorized" : ""
                ])
            }
        } else {
            call.resolve([ "status": "authorized" ])
        }
    }

    private weak var observer: NSObjectProtocol?

    private func addObserver(_ call: CAPPluginCall) {
        self.removeObserver()
        self.observer = NotificationCenter.default.addObserver(
            forName: UIApplication.didBecomeActiveNotification,
            object: nil,
            queue: .main
        ) { [weak self] _ in
            self?.requestPermission(call)
        }
    }

    private func removeObserver() {
        if let observer {
            NotificationCenter.default.removeObserver(observer)
        }
        self.observer = nil
    }
}
