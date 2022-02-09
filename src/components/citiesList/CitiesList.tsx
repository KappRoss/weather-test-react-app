import React from "react";
import CityCard from "./CityCard";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../hooks/redux";
import { SLICE_WEATHER_NAME } from "../../store/reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.light,
    },
    headerBlock: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: theme.spacing(1),
    },
    weatherListBlock: {
      display: "flex",
      height: 290,
    },
    cardsBlock: {
      display: "flex",
      "& > div": {
        margin: theme.spacing(0, 1, 0, 1),
      },
    },
    addCardBlock: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "lightgrey",
      },
    },
  })
);

const CitiesList = () => {
  const classes = useStyles();

  const { searchedCityName, favoriteCities, favoriteCitiesList } =
    useAppSelector((store) => store[SLICE_WEATHER_NAME]);

  return (
    <Box className={classes.container}>
      <Box className={classes.headerBlock}>
        <Box>Favorites Forecast</Box>
      </Box>
      <Box className={classes.weatherListBlock}>
        <Box className={classes.cardsBlock}>
          {searchedCityName &&
          !favoriteCitiesList.includes(searchedCityName) ? (
            <CityCard cityName={searchedCityName} />
          ) : (
            ""
          )}
          {favoriteCities.map((city) =>
            Object.keys(city).map((key) => (
              <CityCard
                key={key}
                cityName={key}
                lng={city[key].lng}
                lat={city[key].lat}
              />
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CitiesList;
