import { observable } from "@legendapp/state";
import { Bill } from "./bills.model";
import { fetchBills } from "./bills.http";
import { event } from "@legendapp/state";

export const loadBills = event();
loadBills.on(async () => {
  const bills = await fetchBills();
  state$.bills.set(bills);
});

export const state$ = observable<{ bills: Bill[] }>({
  bills: [],
});
