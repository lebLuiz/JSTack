import EventManagerInterface from "./EventManagerInterface";

export default class EventManager<TEvent = string, TPayload = any>
  implements EventManagerInterface<TEvent, TPayload>
{
  private listeners: Map<TEvent, Array<(payload: TPayload) => void>>;

  constructor() {
    this.listeners = new Map();
  }

  on(event: TEvent, listener: (payload: TPayload) => void): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(listener);
  }

  emit(event: TEvent, payload: TPayload): void {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event)!.forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(
    event: TEvent,
    listenerToRemove: (payload: TPayload) => void
  ): void {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove
    );

    this.listeners.set(event, filteredListeners);
  }
}
