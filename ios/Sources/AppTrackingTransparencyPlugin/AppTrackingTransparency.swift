import Foundation

@objc public class AppTrackingTransparency: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
