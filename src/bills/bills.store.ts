import { observable } from "@legendapp/state";
import { Bill } from "./bills.model";
import { fetchBills } from "./bills.http";
import { event } from "@legendapp/state";

export const loadBills = event();
loadBills.on(async () => {
  const bills = await fetchBills();
  bills.forEach((bill: Bill, index: number) => {
    const _updateDateIncludingText = new Date(bill.updateDateIncludingText);
    const dateStr = _updateDateIncludingText.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    bill.updateDateIncludingTextString = dateStr;
  }, bills);
  state$.bills.set(bills);
});

export const state$ = observable<{ bills: Bill[] }>({
  bills: [],
});
