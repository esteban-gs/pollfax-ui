import { Bill } from "../bills/bills.model";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { createBillSentiment } from "../bills/bills.http";
import { CreateSentiment } from "../sentiments/sentiments.model";
import { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

interface Props extends Bill {
  yes: (billNumber: string) => void;
  no: (billNumber: string) => void;
}

const Loading = () => {
  return (
    <div className="flex align-items-center justify-content-start">
      <div>
        <ProgressSpinner style={{ width: "35px", height: "35px" }} />
      </div>
    </div>
  );
};
const BillCard = (props: Props) => {
  const {
    number,
    title,
    type,
    updateDateIncludingTextString,
    latestActionText,
    id,
  } = props;

  const [disabled, setDisabled] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [disLikeLoading, setDislikeLoading] = useState(false);

  const like = () => {
    setLikeLoading(true);
    createBillSentiment(
      { billId: id, sentiment: "like" } satisfies CreateSentiment,
      () => {
        setDisabled(true);
        setLikeLoading(false);
      },
      () => console.log("error"),
    );
  };

  const dislike = () => {
    setDislikeLoading(true);
    createBillSentiment(
      { billId: id, sentiment: "dislike" } satisfies CreateSentiment,
      () => {
        setDisabled(true);
        setDislikeLoading(false);
      },
      () => console.log("error"),
    );
  };

  const footer = () => (
    <div className="flex flex-wrap justify-content-end gap-4">
      {likeLoading ? (
        <Loading />
      ) : (
        <Button
          label="Yes"
          icon="pi pi-thumbs-up"
          onClick={() => like()}
          className="p-button-outlined p-button-success"
          disabled={disabled}
        />
      )}

      {disLikeLoading ? (
        <Loading />
      ) : (
        <Button
          label="No"
          icon="pi pi-thumbs-down"
          className="p-button-outlined p-button-danger"
          onClick={() => dislike()}
          disabled={disabled}
        />
      )}
    </div>
  );

  return (
    <div className="card flex justify-content-center my-6">
      <Card
        title={`${type} ${number}`}
        subTitle={title}
        footer={footer()}
        className="md:w-25rem max-w-30rem min-w-20rem"
      >
        <div className="m-0">
          <p>
            <strong>Last Update</strong> - {latestActionText}
          </p>
          <p>({updateDateIncludingTextString})</p>
        </div>
      </Card>
    </div>
  );
};

export default BillCard;
