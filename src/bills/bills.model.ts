export interface Bill {
  number: string;
  originChamber: string;
  title: string;
  type: string;
  url: string;
  latestActionText: string;
  updateDateIncludingText: Date;
  updateDateIncludingTextString?: string;
}


export interface BillsGetResponse {
  bills: Bill[];
  pagination: {
    count: number;
    next: string;
  };
  // not really used
  request: Record<string, string>;
}
