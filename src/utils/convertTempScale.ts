import { TempScale } from "../models/IWeather";

export const convertTempScale = (
  kelvin: number,
  scaleType: TempScale.FAHRENHEIT | TempScale.CELSIUS
) => {
  let temp = 0;
  if (scaleType === TempScale.FAHRENHEIT) {
    temp = (kelvin - 273.15) * 1.8 + 32;
  }
  if (scaleType === TempScale.CELSIUS) {
    temp = kelvin - 273.15;
  }
  return Math.ceil(temp * 10) / 10;
};
