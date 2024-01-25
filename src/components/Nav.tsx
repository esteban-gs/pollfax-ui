import { TabMenu } from "primereact/tabmenu";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Bills",
      icon: "pi pi-fw pi-list",
      command: () => navigate("/bills"),
    },
    {
      label: "Admin",
      icon: "pi pi-fw pi-table",
      command: () => navigate("/admin"),
    },
  ];

  return (
    <>
      <TabMenu model={items} />
    </>
  );
};

export default Nav;
