import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IWeather, PositionDataType } from "../models/IWeather";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (build) => ({
    fetchWeatherData: build.query<IWeather, PositionDataType>({
      query: ({ ...arg }) => ({
        url: "https://community-open-weather-map.p.rapidapi.com/weather",
        params: {
          lat: `${arg.lat}`,
          lon: `${arg.lng}`,
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
