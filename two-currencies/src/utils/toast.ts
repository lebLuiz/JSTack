import EventManager from "../lib/EventManager/EventManager";

interface ToastInterface {
  type: "success" | "error" | "info";
  text: string;
  duration: number;
}

export const toastEventManager = new EventManager();

export default function toast({ type, text, duration }: ToastInterface) {
  toastEventManager.emit("addtoast", { type, text, duration });
}
