import axios from "axios";
import { Station, Available, StationStatus } from "../models/bicycle";

const API_URL = "https://gbfs.urbansharing.com/oslobysykkel.no/";
const client = axios.create({ baseURL: API_URL });

class BicycleAPI {
  // GET request that merges the two JSON lists for the markers
  async getStations(): Promise<StationStatus[]> {
    const stations = await client.get("station_information.json");
    const available = await client.get("station_status.json");
    const res = stations.data.data.stations.map((station: Station) =>
      Object.assign(
        station,
        available.data.data.stations.find(
          (available: Available) => available.station_id === station.station_id
        )
      )
    );
    return res;
  }
}

export default new BicycleAPI();
