import React, { FunctionComponent } from "react";
import { MapComponent } from "../components/MapComponent";
import logo from "../static/bysykkelLogo.png"
import "./MapPage.css"

const MapPage: FunctionComponent = () => {
  return (
    <>
    <img src={logo} alt="" className="logo"/>
      <MapComponent />
    </>
  );
};

export default MapPage;
