import React, { FunctionComponent, useEffect, useState } from "react";
import BicycleAPI from "../api/bicycle";
import { StationStatus } from "../models/bicycle";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import "./MapComponent.css";

const MAPS_API_KEY = "AIzaSyDDb_X4JA1smd-RCg-UhY-fSidxs6RuF4g";

// Sizing of the map
const containerStyle = {
  width: "100vw",
  height: "100vh",
};

// Coordinates for the map's center
const osloCenter = {
  lat: 59.92,
  lng: 10.75,
};

export const MapComponent: FunctionComponent = () => {
  const [stations, setstations] = useState<StationStatus[]>([]);

  useEffect(() => {
    BicycleAPI.getStations().then((stations) => setstations(stations));
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPS_API_KEY,
  });

  // Function for rendering markers
  const renderMarkers = () => {
    return stations.map((station) => (
      <InfoWindow
        position={{ lat: station.lat, lng: station.lon }}
        key={`infowindow-${station.station_id}`}
      >
        <div
          key={`markertext-${station.station_id}`}
          className={"bicycle-marker"}
        >{`${station.num_bikes_available}/${
          station.num_bikes_available + station.num_docks_available
        }`}</div>
      </InfoWindow>
    ));
  };

  return isLoaded ? (
    <GoogleMap
      key={"map"}
      mapContainerStyle={containerStyle}
      center={osloCenter}
      zoom={14.6}
    >
      {renderMarkers()}
    </GoogleMap>
  ) : (
    <></>
  );
};
