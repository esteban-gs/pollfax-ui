import { messages$ } from "../App/message.store";
import { API_URL } from "../config";
import { CreateSentiment } from "../sentiments/sentiments.model";
import { Bill } from "./bills.model";

export const billsApi = `${API_URL}/bills.json` as string;

export const fetchBills = async () => {
  let response, parsed;
  try {
    response = await fetch(billsApi);
    parsed = (await response!.json()) satisfies Bill[];
  } catch (error) {
    console.error("Error fetching bills");
    messages$.toast.set(null);
    messages$.toast.set({
      severity: "error",
      summary: "Sticky",
      detail: "Message Content",
    });
  }

  return parsed ?? ([]satisfies Bill[]);
};

export const createBillSentiment = async (
  sentiment: CreateSentiment,
  onSuccess: Function,
  onError: Function,
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify(sentiment);

  let requestOptions = {
    method: "POST",
    headers: headers,
    body: body,
  };

  fetch(`${API_URL}/bills/sentiments`, requestOptions)
    .then((response) => {
      if (response.status === 201) {
        onSuccess();
      }
    })
    .catch(() => {
      messages$.toast.set({
        severity: "error",
        summary: "Error",
        detail: "There was an error with your request",
      });
      onError();
    });
};
