import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AllRoutes from "./components/ALLroutes/AllRoutes";
import Cont from "./components/Cont";
import Details from "./components/DETAILSPAGE/Details";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
