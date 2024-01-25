import { ProgressSpinner } from "primereact/progressspinner";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { BillEngagementTimeSeries } from "../core/model/bill-engagement-time-series.model";

interface Props {
  billEngagementIndexArray: number[];
}

const AdminResults = (props: Props) => {
  // console.log(props);
  // const uniqueUsers = useLiveQuery(() =>
  //   db.users
  //     .where("userId")
  //     .anyOf(props.billEngagementIndexArray)
  //     .distinct()
  //     .toArray()
  // );

  // const totalUsers = useLiveQuery(() => db.users.count());

  // if (!uniqueUsers || !totalUsers)
  //   return (
  //     <ProgressSpinner
  //       style={{ width: "50px", height: "50px" }}
  //       strokeWidth="8"
  //       fill="var(--surface-ground)"
  //     />
  //   );

  return (
    <div className="flex justify-content-around flex-wrap card-container my-6">
      <Card title="Engagement" className="w-30rem">
        {/* {uniqueUsers && totalUsers && (
          <div>
            <div className="card flex justify-content-center">
              <Message
                text={`${
                  (uniqueUsers?.length! / totalUsers!) * 100
                }% Citizens Engaged (${
                  uniqueUsers?.length
                } / ${totalUsers})`}
              />
            </div>
          </div>
        )} */}
      </Card>
    </div>
  );
};

export default AdminResults;
