import React from "react";
import SearchBar from "./SearchBar";
import CitiesList from "./citiesList/CitiesList";
import DailyForecast from "./dailyForecast/DailyForecast";
import GraphForecast from "./GraphForecast";
import { Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { createStyles, makeStyles } from "@mui/styles";
import SwitcherScale from "./SwitcherScale";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      "& > div": {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.light,
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1),
      },
    },
    graphHeader: {
      padding: theme.spacing(0, 0, 1, 0),
      backgroundColor: theme.palette.primary.light,
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container>
        <Grid item xs={10} display="flex">
          <SearchBar />
        </Grid>
        <Grid item xs={2}>
          <SwitcherScale />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CitiesList />
      </Grid>
      <Grid item xs={12}>
        <DailyForecast />
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.graphHeader}>
          <Typography variant={"h6"}>10 Days Forecast</Typography>
        </Box>
        <GraphForecast />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
