import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();
  let items: MenuItem[] = [
    {
      label: "Bills Engagement",
      icon: "pi pi-fw pi-plus",
      command: () => navigate("/admin/bills"),
    },
    {
      label: "Totals",
      icon: "pi pi-fw pi-trash",
      command: () => navigate("/admin/totals"),
    },
    {
      label: "Per Day",
      icon: "pi pi-fw pi-trash",
      command: () => navigate("/admin/per-day")
    }
  ];

  return <Menu model={items} />;
};

export default AdminNav;
