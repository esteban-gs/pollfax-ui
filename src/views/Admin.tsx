import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";

const Admin = () => {
  return (
    <>
      <div className="flex justify-content-start">
        <div style={{ width: "250px", height: "15vh" }}>
          <AdminNav />
        </div>
        <div className="flex flex-column">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
