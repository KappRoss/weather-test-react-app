import React, { useEffect } from "react";
import "./styles/App.css";
import SidePanel from "./components/SidePanel";
import Dashboard from "./components/Dashboard";
import { useAppDispatch } from "./hooks/redux";
import { setUserCoords } from "./store/reducers";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(setUserCoords({ lat: latitude, lng: longitude }));
      },
      () => {
        console.log("The user has disabled the use of geolocation");
      }
    );
  }, [dispatch]);

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
