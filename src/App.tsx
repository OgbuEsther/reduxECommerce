import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AllRoutes from "./components/ALLroutes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
