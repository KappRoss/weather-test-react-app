import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPositionData, TempScale } from "../../models/IWeather";

export const SLICE_WEATHER_NAME = "weather";

interface WeatherState {
  favoriteCities: { [x: string]: IPositionData }[] | [];
  favoriteCitiesList: string[];
  location: string | null;
  temperatureScale: TempScale.CELSIUS | TempScale.FAHRENHEIT;
  userCoords: IPositionData | null;
  searchСoords: IPositionData | null;
  searchedCityName: string;
}

const initialState: WeatherState = {
  favoriteCities: [],
  favoriteCitiesList: [],
  location: null,
  temperatureScale: TempScale.CELSIUS,
  userCoords: null,
  searchСoords: null,
  searchedCityName: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setUserCoords: (state, action: PayloadAction<IPositionData>) => {
      state.userCoords = action.payload;
    },
    setSearchСoords: (state, action: PayloadAction<IPositionData>) => {
      state.searchСoords = action.payload;
    },
    setSearchedCity: (state, action: PayloadAction<string>) => {
      state.searchedCityName = action.payload;
    },
    editFavoriteList: (
      state,
      action: PayloadAction<{ [x: string]: IPositionData }>
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
    setTemperatureScale: (state, action: PayloadAction<boolean>) => {
      state.temperatureScale = action.payload
        ? TempScale.CELSIUS
        : TempScale.FAHRENHEIT;
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
  setTemperatureScale,
} = weatherSlice.actions;
