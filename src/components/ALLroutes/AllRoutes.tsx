import React from "react";
import { useRoutes } from "react-router-dom";
import CartPage from "../Cart/CartPage";
import HomeScreen from "../HomeScreen";
import Products from "../Products/Products";
import SinglePage from "../Singlepage/SinglePage";

const AllRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/details/:id",
      element: <SinglePage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/product",
      element: <Products />,
    },
  ]);
  return <div>{routes}</div>;
};

export default AllRoutes;

/**import React from "react";
import { useRoutes } from "react-router-dom";
import CartPage from "../CartPage/CartPage";
import Products from "../Products/Products";
import Register from "../Register/Register";
import SinglePage from "../SinglePage/SinglePage";
import HomeScreen from "./HomeScreen";

const AllRoutes = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <HomeScreen />,
		},
		{
			path: "/details/:id",
			element: <SinglePage />,
		},
		{
			path: "/cart",
			element: <CartPage />,
		},
		{
			path: "/product",
			element: <Products />,
		},
		{
			path: "/register",
			element: <Register />,
		},
	]);
	return element;
};

export default AllRoutes; */
