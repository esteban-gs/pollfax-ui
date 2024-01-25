import PerBillEngagementResults from "./PerBillEngagementResults";

const PerBillDashboardContainer = () => {
  const bills = [] as any[]; // take the bills and filter the ones the with current user's id

  return (
    <>
      {bills &&
        bills.map((bill) => (
          <PerBillEngagementResults key={bill.number} {...bill} />
        ))}
    </>
  );
};

export default PerBillDashboardContainer;
