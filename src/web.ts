import { WebPlugin } from '@capacitor/core';

import type { AppTrackingTransparencyPlugin, AppTrackingStatusResponse } from './definitions';

export class AppTrackingTransparencyWeb extends WebPlugin implements AppTrackingTransparencyPlugin {
  getStatus(): Promise<AppTrackingStatusResponse> {
    return Promise.resolve({ status: 'authorized' });
  }

  requestPermission(): Promise<AppTrackingStatusResponse> {
    return Promise.resolve({ status: 'authorized' });
  }
}
