import { useEffect } from "react";
import BillCard from "../components/BillCard";
import { loadBills, state$ } from "./bills.store";
import { observer } from "@legendapp/state/react";

const Bills = () => {
  useEffect(() => {
    loadBills.fire();
  }, []);

  return (
    <div>
      {state$.bills.get().length > 0 &&
        state$.bills
          .get()
          .map((bill: any) => <BillCard key={bill.number} {...bill} />)}
    </div>
  );
};

export default observer(Bills);
