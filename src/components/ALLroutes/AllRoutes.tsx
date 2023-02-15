import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../HomeScreen";

const AllRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);
  return <div>AllRoutes</div>;
};

export default AllRoutes;
