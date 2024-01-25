// TODO: This model may not be necessary
export interface UserSentiment {
  userId: string;
  billId: string;
  sentiment: "Yes" | "No";
  sentimentDate: Date;
}
