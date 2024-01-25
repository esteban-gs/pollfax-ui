import Nav from "./components/Nav";
import PrimeReact from "primereact/api";

import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.min.css"; //icons
import { Outlet } from "react-router-dom";
import { enableReactUse } from "@legendapp/state/config/enableReactUse";
import { Toast } from "./App/Toast";

PrimeReact.ripple = true;

// legend app state setting turns on fine-grained reactivity
enableReactUse();

function App() {
  return (
    <>
      <Nav />
      <Toast />
      <Outlet />
    </>
  );
}

export default App;
