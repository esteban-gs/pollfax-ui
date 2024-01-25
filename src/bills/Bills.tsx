import { useEffect } from "react";
import BillCard from "../components/BillCard";
import { loadBills, state$ } from "./bills.store";
import { Memo, Show, observer } from "@legendapp/state/react";

const Bills = () => {
  useEffect(() => {
    loadBills.fire();
  }, []);

  const yes = (billNumber: string) => console.log(billNumber);
  const no = (billNumber: string) => console.log(billNumber);

  return (
    <div>
      {state$.bills.get().length > 0 &&
        state$.bills
          .get()
          .map((bill: any) => (
            <BillCard key={bill.number} {...bill} yes={yes} no={no} />
          ))}
    </div>
  );
};

export default observer(Bills);
