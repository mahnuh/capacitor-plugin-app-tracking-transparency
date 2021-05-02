export interface AppTrackingTransparencyPlugin {
  getStatus(): Promise<AppTrackingStatusResponse>;
  requestPermission(): Promise<AppTrackingStatusResponse>;
}

export type AppTrackingStatusResponse = { status: AppTrackingStatus };

export type AppTrackingStatus = 'authorized' | 'denied' | 'notDetermined' | 'restricted';
