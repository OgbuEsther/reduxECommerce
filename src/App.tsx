import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AllRoutes from "./components/ALLroutes/AllRoutes";
import Cont from "./components/Cont";
import Details from "./components/DETAILSPAGE/Details";
import SinglePage from "./components/Singlepage/SinglePage";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      {/* <SinglePage /> */}
    </div>
  );
}

export default App;
