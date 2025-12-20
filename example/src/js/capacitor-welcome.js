import { SplashScreen } from '@capacitor/splash-screen';
import { AppTrackingTransparency } from 'capacitor-plugin-app-tracking-transparency';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `
    <style>
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: block;
        width: 100%;
        height: 100%;
      }
      h1, h2, h3, h4, h5 {
        text-transform: uppercase;
      }
      .button {
        display: inline-block;
        padding: 10px;
        background-color: #73B5F6;
        color: #fff;
        font-size: 0.9em;
        border: 0;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;
        margin-right: 8px;
        margin-bottom: 8px;
      }
      .button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
      main {
        padding: 15px;
      }
      main hr { height: 1px; background-color: #eee; border: 0; }
      main h1 {
        font-size: 1.4em;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      main h2 {
        font-size: 1.1em;
      }
      main h3 {
        font-size: 0.9em;
      }
      main p {
        color: #333;
      }
      main pre {
        white-space: pre-line;
      }
      .status-box {
        background-color: #f5f5f5;
        border-radius: 8px;
        padding: 15px;
        margin: 15px 0;
      }
      .status-label {
        font-size: 0.8em;
        color: #666;
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      .status-value {
        font-size: 1.2em;
        font-weight: 600;
        color: #333;
      }
      .status-value.authorized { color: #4CAF50; }
      .status-value.denied { color: #f44336; }
      .status-value.restricted { color: #ff9800; }
      .status-value.notDetermined { color: #2196F3; }
    </style>
    <div>
      <capacitor-welcome-titlebar>
        <h1>App Tracking Transparency</h1>
      </capacitor-welcome-titlebar>
      <main>
        <p>
          This example app demonstrates the App Tracking Transparency plugin for Capacitor.
        </p>
        
        <h2>Tracking Authorization Status</h2>
        <div class="status-box">
          <div class="status-label">Current Status</div>
          <div class="status-value" id="status">Loading...</div>
        </div>
        
        <p>
          <button class="button" id="get-status">Get Status</button>
          <button class="button" id="request-permission">Request Permission</button>
        </p>
        
        <hr>
        
        <h2>Status Meanings</h2>
        <p>
          <strong>notDetermined:</strong> User has not yet been asked for permission.<br>
          <strong>authorized:</strong> User granted permission to track.<br>
          <strong>denied:</strong> User denied permission to track.<br>
          <strong>restricted:</strong> Tracking is restricted (e.g., parental controls).
        </p>
        
        <p>
          <em>Note: On iOS Simulator, the status will always be "authorized" unless you're running on iOS 14+.</em>
        </p>
      </main>
    </div>
    `;
    }

    connectedCallback() {
      const self = this;

      // Get initial status
      this.updateStatus();

      self.shadowRoot.querySelector('#get-status').addEventListener('click', async function () {
        await self.updateStatus();
      });

      self.shadowRoot.querySelector('#request-permission').addEventListener('click', async function () {
        try {
          const result = await AppTrackingTransparency.requestPermission();
          self.setStatus(result.status);
          console.log('Permission result:', result);
        } catch (e) {
          console.error('Error requesting permission:', e);
          self.setStatus('Error: ' + e.message);
        }
      });
    }

    async updateStatus() {
      try {
        const result = await AppTrackingTransparency.getStatus();
        this.setStatus(result.status);
        console.log('Current status:', result);
      } catch (e) {
        console.error('Error getting status:', e);
        this.setStatus('Error: ' + e.message);
      }
    }

    setStatus(status) {
      const statusEl = this.shadowRoot.querySelector('#status');
      if (statusEl) {
        statusEl.textContent = status;
        statusEl.className = 'status-value ' + status;
      }
    }
  },
);

window.customElements.define(
  'capacitor-welcome-titlebar',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 15px 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
    }
  },
);
