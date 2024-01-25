import { useContext, useRef } from "react";
import { Toast as MUIToast } from "primereact/toast";
import { observer, useObserve } from "@legendapp/state/react";
import { messages$ } from "./message.store";

export const Toast = () => {
  const toast = useRef<MUIToast>(null);

  useObserve(messages$.toast, (t) => {
    if (t.value) {
      toast.current?.show({ ...t.value } as any);
    }
  });

  return (
    <div className="card flex justify-content-center">
      <MUIToast ref={toast} />
    </div>
  );
};

export default observer(Toast);
