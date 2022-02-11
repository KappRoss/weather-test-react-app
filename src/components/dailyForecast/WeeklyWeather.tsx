import React from "react";
import { weatherAPI } from "../../services/WeatherService";
import { useAppSelector } from "../../hooks/redux";
import { SLICE_WEATHER_NAME } from "../../store/reducers";
import Grid from "@mui/material/Grid";
import { Paper, Theme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { createStyles, makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import moment from "moment";
import { convertTempScale } from "../../utils/convertTempScale";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      padding: theme.spacing(2, 2, 0, 0),
      "& > div": {
        minWidth: 120,
        padding: theme.spacing(0, 2, 1, 2),
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
      },
      "& > div > div": {
        margin: "0 auto",
      },
    },
    container: {
      padding: 0,
    },
  })
);

const WeeklyWeather = () => {
  const classes = useStyles();

  const numberOfDays = 7;
  const { searchСoords, temperatureScale } = useAppSelector(
    (store) => store[SLICE_WEATHER_NAME]
  );
  const { data } = weatherAPI.useFetchDailyForecastQuery(
    {
      lat: searchСoords?.lat,
      lng: searchСoords?.lng,
      cnt: numberOfDays,
    },
    { skip: !searchСoords }
  );

  return (
    <Grid id="weekly-weather" container className={classes.container}>
      {data &&
        data.list.map((item) => (
          <Grid className={classes.item} key={item.dt} item>
            <Paper sx={{ height: 140, width: 100 }}>
              <Avatar
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                style={{
                  width: 100,
                  height: 100,
                }}
                aria-label="image"
              />
              <Box sx={{ pb: 2 }}>
                {`${convertTempScale(
                  item.temp.min,
                  temperatureScale
                )}${temperatureScale}/${convertTempScale(
                  item.temp.max,
                  temperatureScale
                )}${temperatureScale}`}
              </Box>
              <Box sx={{ pb: 2 }}>
                {moment(item.dt).format(" D ddd").toString()}
              </Box>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
};

export default WeeklyWeather;
