import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  editFavoriteList,
  removeFavoriteCity,
  SLICE_WEATHER_NAME,
} from "../../store/reducers";
import { weatherAPI } from "../../services/WeatherService";
import { convertTempScale } from "../../utils/convertTempScale";

interface CityCardProps {
  cityName: string;
  lng?: number | undefined | null;
  lat?: number | undefined | null;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "& .MuiCardHeader-root": {
        padding: 5,
        maxWidth: 260,
        "& .MuiCardHeader-content": {
          paddingLeft: theme.spacing(1),
        },
      },
      "& .MuiCardContent-root": {
        padding: theme.spacing(1, 0, 1, 2),
      },
      "& .MuiCardActions-root": {
        justifyContent: "space-between",
      },
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
    },
    cardContent: {
      "& > div > div": {
        paddingRight: theme.spacing(1),
        width: "100%",
      },
    },
    favoriteIcon: {
      color: "grey",
      "& :hover": {
        color: "yellow",
      },
    },
    deleteIcon: {
      "& :hover": {
        color: "red",
      },
    },
  })
);

const CityCard: React.FC<CityCardProps> = ({ cityName, lng, lat }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const { searchСoords, favoriteCitiesList, temperatureScale } = useAppSelector(
    (store) => store[SLICE_WEATHER_NAME]
  );

  const { data } = weatherAPI.useFetchWeatherDataQuery(
    {
      lng: lng || searchСoords?.lng,
      lat: lat || searchСoords?.lat,
    },
    { skip: !searchСoords }
  );

  const addToFavoriteList = () => {
    if (!favoriteCitiesList.includes(cityName)) {
      dispatch(
        editFavoriteList({
          [cityName]: {
            lat: searchСoords?.lat,
            lng: searchСoords?.lng,
          },
        })
      );
    }
  };

  const deleteFromFavorite = () => dispatch(removeFavoriteCity(cityName));

  return (
    <>
      {data && (
        <Card sx={{ minWidth: 240 }} className={classes.cardContainer}>
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
            title={cityName}
            subheader={`${convertTempScale(
              data.main.temp,
              temperatureScale
            )}${temperatureScale}`}
          />
          <CardContent className={classes.cardContent}>
            <Grid container>
              <Grid item xs={6}>
                {"Description:"}
              </Grid>
              <Grid item xs={6}>
                {data.weather[0].description}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                {"Timezone:"}
              </Grid>
              <Grid item xs={6}>
                {data.timezone}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                {"Humidity:"}
              </Grid>
              <Grid item xs={6}>
                {data.main.humidity}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                {"Wind speed:"}
              </Grid>
              <Grid item xs={6}>
                {data.wind.speed}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions disableSpacing>
            {!lng && (
              <IconButton
                aria-label="add to favorites"
                className={classes.favoriteIcon}
                onClick={addToFavoriteList}
              >
                <FavoriteIcon />
              </IconButton>
            )}
            {lng && (
              <IconButton
                aria-label="share"
                className={classes.deleteIcon}
                onClick={deleteFromFavorite}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default CityCard;
