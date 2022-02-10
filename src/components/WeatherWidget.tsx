import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { weatherAPI } from "../services/WeatherService";
import { useAppSelector } from "../hooks/redux";
import { SLICE_WEATHER_NAME } from "../store/reducers";
import CardHeader from "@mui/material/CardHeader";
import { createStyles, makeStyles } from "@mui/styles";
import { LinearProgress, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment";
import { convertTempScale } from "../utils/convertTempScale";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiCardHeader-avatar": {
        margin: 0,
      },
    },
    title: {
      "& .MuiTypography-root": {
        padding: theme.spacing(2, 2, 0, 2),
      },
    },
    cardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    infoBlockContainer: {
      width: "100%",
      padding: theme.spacing(2, 2, 0, 2),
    },
    infoBlock: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  })
);

const WeatherWidget = () => {
  const classes = useStyles();
  const { userCoords, temperatureScale } = useAppSelector(
    (store) => store[SLICE_WEATHER_NAME]
  );

  const { data } = weatherAPI.useFetchWeatherDataQuery(
    {
      lng: userCoords?.lng,
      lat: userCoords?.lat,
    },
    { skip: !userCoords }
  );

  return (
    <>
      {data && (
        <Card sx={{ minWidth: 275, mb: 2 }} className={classes.container}>
          <Box className={classes.title}>
            <Typography variant={"h6"}>{moment().calendar()}</Typography>
          </Box>
          <CardHeader
            avatar={
              <Avatar
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                style={{
                  width: 100,
                  height: 100,
                }}
                aria-label="image"
              />
            }
          />
          <CardContent className={classes.cardContent}>
            <Typography>{"Your Location:"}</Typography>
            <Typography variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {convertTempScale(data.main.temp, temperatureScale)}
              {temperatureScale}
            </Typography>
            <Box className={classes.infoBlockContainer}>
              <Box sx={{ width: "100%" }}>
                <Box className={classes.infoBlock} sx={{ marginBottom: 1 }}>
                  <Box>{"Humidity:"}</Box>
                  <Box>{data.main.humidity}%</Box>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={data.main.humidity}
                />
              </Box>
            </Box>
            <Box className={classes.infoBlockContainer}>
              <Box sx={{ width: "100%" }}>
                <Box className={classes.infoBlock}>
                  <Box>{"Wind speed:"}</Box>
                  <Box>{data.wind.speed}m/s</Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default WeatherWidget;
