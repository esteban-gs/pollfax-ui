import { messages$ } from "../App/message.store";
import { API_URL } from "../config";
import { Bill } from "./bills.model";

export const billsApi = `${API_URL}/bills.json` as string;

export const fetchBills = async () => {
  let response, parsed;
  try {
    response = await fetch(billsApi);
    parsed = await response!.json();
  } catch (error) {
    console.error("Error fetching bills");
    messages$.toast.set(null);
    messages$.toast.set({
      severity: "error",
      summary: "Sticky",
      detail: "Message Content",
    });
  }

  return parsed ?? ([] satisfies Bill[]);
};
