import XCTest
@testable import AppTrackingTransparencyPlugin

class AppTrackingTransparencyTests: XCTestCase {
    func testPluginMethodsRegistered() {
        // Verify that the plugin has the expected methods registered
        let plugin = AppTrackingTransparencyPlugin()
        let methodNames = plugin.pluginMethods.map { $0.name }

        XCTAssertTrue(methodNames.contains("getStatus"))
        XCTAssertTrue(methodNames.contains("requestPermission"))
    }
}
