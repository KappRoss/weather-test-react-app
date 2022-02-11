import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherAPI } from "../services/WeatherService";
import { weatherReducer, SLICE_WEATHER_NAME } from "./reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  [SLICE_WEATHER_NAME]: weatherReducer,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [weatherAPI.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        weatherAPI.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
