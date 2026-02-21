import React from "react";
import Menu from "../pages/menu/Menu";
import Admin from "../pages/admin/Admin";
import Order from "../pages/order/Order";
import { Route, Routes } from "react-router-dom";
const MainRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <Menu />,
    },
    {
      link: "/admin",
      element: <Admin />,
    },
    {
      link: "/orders",
      element: <Order />,
    },
  ];
  return (
    <div>
      <Routes>
        {routes.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
