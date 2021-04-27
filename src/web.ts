import { WebPlugin } from '@capacitor/core';
import { AppTrackingTransparencyPlugin, AppTrackingStatusResponse } from './definitions';

export class AppTrackingTransparencyWeb extends WebPlugin implements AppTrackingTransparencyPlugin {
  constructor() {
    super({
      name: 'AppTrackingTransparency',
      platforms: ['web'],
    });
  }

  getStatus(): Promise<AppTrackingStatusResponse> {
    return Promise.resolve({ status: 'authorized' });
  }

  requestPermission(): Promise<AppTrackingStatusResponse> {
    return Promise.resolve({ status: 'authorized' });
  }
}

const AppTrackingTransparency = new AppTrackingTransparencyWeb();

export { AppTrackingTransparency };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AppTrackingTransparency);
