import React from "react";
import CityCard from "./CityCard";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.background.default,
    },
    headerBlock: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: theme.spacing(1),
    },
    weatherListBlock: {
      display: "flex",
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

  return (
    <Box className={classes.container}>
      <Box className={classes.headerBlock}>
        <Box>Weather Forecast</Box>
        <Box>Edit</Box>
      </Box>
      <Box className={classes.weatherListBlock}>
        <Box className={classes.cardsBlock}>
          <CityCard />
          <CityCard />
          <CityCard />
        </Box>
        <Box className={classes.addCardBlock}>
          <AddIcon color="primary" sx={{ fontSize: 80 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CitiesList;
