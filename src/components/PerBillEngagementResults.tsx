import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";
import { Bill } from "../bills/bills.model";

interface Props extends Bill {}
const PerBillEngagementResults = (props: Props) => {
  console.log("Perbill", props);
  const supportingCount = 1;

  const againstCount = 2;
  const {
    number,
    title,
    type,
  } = props;

  return (
    <div className="flex justify-content-around flex-wrap card-container my-6">
      <Card title={`${type}-${number}`} subTitle={title} className="w-20rem">
        <div className="m-0">
          <p>
            <strong>
              % Supporting:{" "}
              {supportingCount ?? (
                <ProgressSpinner
                  style={{ width: "50px", height: "50px" }}
                  strokeWidth="8"
                  fill="var(--surface-ground)"
                />
              )}
            </strong>
          </p>
          <p>
            <strong>
              % Against:{" "}
              {againstCount ?? (
                <ProgressSpinner
                  style={{ width: "50px", height: "50px" }}
                  strokeWidth="8"
                  fill="var(--surface-ground)"
                />
              )}
            </strong>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PerBillEngagementResults;
