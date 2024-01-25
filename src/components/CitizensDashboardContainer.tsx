import CitizensEngagedResults from "./CitizensEngagedResults";

const CitizensDashboardContainer = () => {
  const billEngagements = [] as number[];

  if (!billEngagements) return null;

  return (
    <>
      {billEngagements && (
        <CitizensEngagedResults billEngagementIndexArray={billEngagements} />
      )}
    </>
  );
};

export default CitizensDashboardContainer;
