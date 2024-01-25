import { event, observable } from "@legendapp/state";

export interface Toast {
  severity: string;
  summary: string;
  detail: string;
  sticky?: boolean;
}

export const showCurrentToast = event();
export const messages$ = observable<{ toast: Toast | null }>({
  toast: null,
});
