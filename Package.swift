// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorPluginAppTrackingTransparency",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorPluginAppTrackingTransparency",
            targets: ["AppTrackingTransparencyPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "AppTrackingTransparencyPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AppTrackingTransparencyPlugin"),
        .testTarget(
            name: "AppTrackingTransparencyPluginTests",
            dependencies: ["AppTrackingTransparencyPlugin"],
            path: "ios/Tests/AppTrackingTransparencyPluginTests")
    ]
)
