import { BillEngagementTimeSeries } from "../model/bill-engagement-time-series.model";

const fetchBillEngagements = async () => {
  try {
    const response = await fetch("/billEngagementTimeseries.json");
    const jsResponse = await response.json();
    return jsResponse.map((be: any) => ({
      ...be,
      createdAt: new Date(be.createdAt),
      // indexeddb doesn't support booleans, so...
      supportedByUser: be.supportedByUser ? 1 : 0,
    })) as BillEngagementTimeSeries[];
  } catch (error: unknown) {
    console.error(error);
    return [];
  }
};

export { fetchBillEngagements };
