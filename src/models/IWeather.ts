export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feelslike: number;
    tempmin: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IDailyWeather {
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    population: number;
    timezone: number;
  };
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
    };
    pressure: number;
    humidity: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    speed: number;
    deg: number;
    gust: number;
    clouds: number;
    pop: number;
  }[];
}

export interface IPositionData {
  lat: number | null | undefined;
  lng: number | null | undefined;
}

export interface IDailyPositionData extends IPositionData {
  cnt: number;
}

export enum TempScale {
  FAHRENHEIT = "°F",
  CELSIUS = "°C",
}
