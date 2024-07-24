/* eslint-disable no-unused-vars */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Window {
    __junoCommunicatorTabId?: string
    __junoEventListeners?: {
      [type: string]: {
        [event: string]: Function[]
      }
    }
    BroadcastChannel?: typeof BroadcastChannel
  }
}
export {}
