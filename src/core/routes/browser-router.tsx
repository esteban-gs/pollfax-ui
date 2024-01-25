import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import CitizensDashboardContainer from "../../components/CitizensDashboardContainer";
import PerBillDashboardContainer from "../../components/PerBillDashboardContainer";
import PerDaySupportDashboardContainer from "../../components/PerDaySupportDashboardContainer";
import Admin from "../../views/Admin";
import Bills from "../../bills/Bills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "bills",
        element: <Bills />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "bills",
            element: <PerBillDashboardContainer />,
          },
          {
            path: "totals",
            element: <CitizensDashboardContainer />,
          },
          {
            path: "per-day",
            element: <PerDaySupportDashboardContainer />,
          },
        ],
      },
    ],
  },
]);
