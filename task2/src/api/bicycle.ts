import axios from "axios";
import { Station } from "../models/bicycle"

const API_URL = "https://gbfs.urbansharing.com/oslobysykkel.no/"
const client = axios.create({ baseURL: API_URL });

class BicycleAPI {
    async getStations(): Promise<Station[]> {
        const response = await client.get("station_status.json")
        return response.data.data.stations
    }
}

export default new BicycleAPI();