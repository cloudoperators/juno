declare global {
    interface Window {
      __junoCommunicatorTabId?: string;
      __junoEventListeners?: {
        [type: string]: {
          [event: string]: Function[];
        };
      };
      BroadcastChannel?: typeof BroadcastChannel;
    }
  }
export {}
