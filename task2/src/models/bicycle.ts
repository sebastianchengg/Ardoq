export interface Station {
  station_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  capacity: number;
}

export interface Available {
  is_installed: number;
  is_renting: number;
  num_bikes_available: number;
  num_docks_available: number;
  last_reported: number;
  is_returning: number;
  station_id: string;
}

export interface StationStatus {
  station_id: string;
  is_installed: number;
  is_renting: number;
  num_bikes_available: number;
  num_docks_available: number;
  last_reported: number;
  is_returning: number;
  name: string;
  address: string;
  lat: number;
  lon: number;
  capacity: number;
}
