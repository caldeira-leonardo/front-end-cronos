import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>a
      <Outlet />
    </div>
  );
};

export default MainLayout;
