import Create from "../pages/Customer/Create";
import Edit from "../pages/Customer/Edit";
import List from "../pages/Customer/List";

export default [
  { path: "/customer/create", component: Create },
  { path: "/customer/list", component: List },
  { path: "/customer/:id", component: Edit },
];
