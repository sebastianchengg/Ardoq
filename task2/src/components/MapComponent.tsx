import React, { FunctionComponent, useEffect, useState } from "react";
import BicycleAPI from "../api/bicycle";
import { Station } from "../models/bicycle";

export const MapComponent: FunctionComponent = () => {
  const [stations, setstations] = useState<Station[]>([]);

  useEffect(() => {
    BicycleAPI.getStations().then((stations) => setstations(stations));
  }, []);

  console.log(stations[0])

  return (
    <>
      <h1>Map</h1>
    </>
  );
};
