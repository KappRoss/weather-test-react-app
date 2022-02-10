import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  IDailyWeather,
  IWeather,
  IPositionData,
  IDailyPositionData,
} from "../models/IWeather";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://community-open-weather-map.p.rapidapi.com/" }),
  endpoints: (build) => ({
    fetchWeatherData: build.query<IWeather, IPositionData>({
      query: ({ ...arg }) => ({
        url: "weather",
        params: {
          lat: `${arg.lat}`,
          lon: `${arg.lng}`,
        },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
        },
      }),
    }),
    fetchDailyForecast: build.query<IDailyWeather, IDailyPositionData>({
      query: (arg) => ({
        url: "forecast/daily",
        params: {
          lat: `${arg.lat}`,
          lon: `${arg.lng}`,
          cnt: `${arg.cnt}`,
        },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "895cdef931msha341fc0a9d7c9f0p1d006ajsn965516cbafcd",
        },
      }),
    }),
  }),
});
