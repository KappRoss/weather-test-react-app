import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PositionDataType } from "../../models/IWeather";

export const SLICE_WEATHER_NAME = "weather";

interface WeatherState {
  favoriteCities: { [x: string]: PositionDataType }[] | [];
  favoriteCitiesList: string[];
  location: string | null;
  temperatureScale: "°C" | "°F";
  userCoords: PositionDataType;
  searchСoords: PositionDataType;
  searchedCityName: string;
}

const initialState: WeatherState = {
  favoriteCities: [],
  favoriteCitiesList: [],
  location: null,
  temperatureScale: "°C",
  userCoords: { lat: null, lng: null },
  searchСoords: { lat: null, lng: null },
  searchedCityName: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setUserCoords: (state, action: PayloadAction<PositionDataType>) => {
      state.userCoords = action.payload;
    },
    setSearchСoords: (state, action: PayloadAction<PositionDataType>) => {
      state.searchСoords = action.payload;
    },
    setSearchedCity: (state, action: PayloadAction<string>) => {
      state.searchedCityName = action.payload;
    },
    editFavoriteList: (
      state,
      action: PayloadAction<{ [x: string]: PositionDataType }>
    ) => {
      state.favoriteCities = [action.payload, ...state.favoriteCities];
      state.favoriteCitiesList = [
        ...state.favoriteCitiesList,
        Object.keys(action.payload)[0],
      ];
    },
    removeFavoriteCity: (state, action: PayloadAction<string>) => {
      const filteredCitiesList = state.favoriteCitiesList.filter(
        (item) => item !== action.payload
      );
      const filteredCities = state.favoriteCities.filter(
        (object) => Object.keys(object)[0] !== action.payload
      );
      state.favoriteCities = [...filteredCities];
      state.favoriteCitiesList = [...filteredCitiesList];
    },
  },
});

export default weatherSlice.reducer;
export const {
  setUserCoords,
  setSearchСoords,
  setSearchedCity,
  editFavoriteList,
  removeFavoriteCity,
} = weatherSlice.actions;
