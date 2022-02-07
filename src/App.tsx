import React from "react";
import "./styles/App.css";
import SidePanel from "./components/SidePanel";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="SidePanel">
        <SidePanel />
      </div>
      <div className="Dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
