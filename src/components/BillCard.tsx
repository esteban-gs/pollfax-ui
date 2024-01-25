import { Bill } from "../bills/bills.model";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface Props extends Bill {
  yes: (billNumber: string) => void;
  no: (billNumber: string) => void;
}

const BillCard = (props: Props) => {
  const {
    number,
    originChamber,
    title,
    type,
    updateDateIncludingText,
    latestActionText,
    url,
    yes,
    no,
  } = props;

  const footer = (billNumber: string) => (
    <div className="flex flex-wrap justify-content-end gap-4">
      <Button
        label="Yes"
        icon="pi pi-thumbs-up"
        onClick={() => yes(billNumber)}
        className="p-button-outlined p-button-success"
      />
      <Button
        label="No"
        icon="pi pi-thumbs-down"
        className="p-button-outlined p-button-danger"
        onClick={() => no(billNumber)}
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center my-6">
      <Card
        title={`${type} ${number}`}
        subTitle={title}
        footer={footer(number)}
        className="md:w-25rem max-w-30rem min-w-20rem"
      >
        <div className="m-0">
          <p>
            <strong>Last Update</strong> - {latestActionText}
          </p>
          {/* // TODO: need to coerce into date */}
          <p>
            (
            {updateDateIncludingText.toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
            )
          </p>
        </div>
      </Card>
    </div>
  );
};

export default BillCard;
