import PerDaySupportResults from "./PerDaySupportResults";

const PerDaySupportDashboardContainer = () => {
  const bills = [] as any[];

  if (!bills) return null;

  return (
    <>
      {bills.map((bill) => (
        <PerDaySupportResults key={bill.number} {...bill} />
      ))}
    </>
  );
};

export default PerDaySupportDashboardContainer;
