import { createSlice } from "@reduxjs/toolkit";

interface WeatherState {
  cities: string[];
  favoritesCities: string[];
  location: string | null;
  temperatureScale: "°C" | "°F";
}

const initialState: WeatherState = {
  cities: [],
  favoritesCities: [],
  location: null,
  temperatureScale: "°C",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
});

export default weatherSlice.reducer;
