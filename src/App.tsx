import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AllRoutes from "./components/ALLroutes/AllRoutes";
import Cont from "./components/Cont";

function App() {
  return (
    <div className="App">
      {/* <Cont /> */}
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
