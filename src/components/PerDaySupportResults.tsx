import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";
import { Bill } from "../bills/bills.model";

interface Props extends Bill {}

const PerDaySupportResults = (props: Props) => {
  const { number, type } = props;

  const result: {
    date: string;
    count: number;
    label: string;
    countSupporting: number;
  }[] = [];

  const billsEngaged = [] as any;

  const billEngagedDates = [] as Date[];

  const uniqueBelongingDates = [...new Set(billEngagedDates)];

  // uniqueBelongingDates?.forEach((x) => {
  //   const matching = billsEngaged?.filter(
  //     (bed) => bed.createdAt.toISOString() === x
  //   )?.length;
  //   const supportMatching = billsEngaged?.filter(
  //     (bed) => bed.createdAt.toISOString() === x && bed.supportedByUser === 1
  //   )?.length;

  //   result.push({
  //     date: x,
  //     count: matching ?? 0,
  //     label: `${type}-${number}`,
  //     countSupporting: supportMatching ?? 0,
  //   });
  // });

  return (
    <div className="card w-25rem my-6">
      <>
        <Card title={`${type}-${number}`}>
          {result &&
            result.map((each) => (
              <div
                key={each.date}
                className="flex justify-content-around flex-wrap"
              >
                <div className="flex align-items-center justify-content-center">
                  {new Date(each.date).toLocaleDateString()}
                </div>
                <div className="flex align-items-center justify-content-center">
                  {each.countSupporting} / {each.count}
                </div>
                <div className="flex align-items-center justify-content-center">{`${Math.round(
                  (each.countSupporting / each.count) * 100
                )}% Supported`}</div>
              </div>
            ))}
        </Card>
      </>
    </div>
  );
};
export default PerDaySupportResults;
