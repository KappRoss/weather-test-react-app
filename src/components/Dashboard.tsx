import React from "react";
import SearchBar from "./SearchBar";
import CitiesList from "./citiesList/CitiesList";
import DailyForecast from "./dailyForecast/DailyForecast";
import GraphForecast from "./GraphForecast";
import { Switch, Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      "& > div": {
        margin: theme.spacing(1),
      },
    },
    header: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1),
    },
    favoriteList: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1),
    },
    dailyForecast: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1),
    },
    graphForecast: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1),
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.header}>
        <Grid item xs={10} display="flex">
          <SearchBar />
        </Grid>
        <Grid item xs={2}>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.favoriteList}>
        <CitiesList />
      </Grid>
      <Grid item xs={12} className={classes.dailyForecast}>
        <DailyForecast />
      </Grid>
      <Grid item xs={12} className={classes.graphForecast}>
        <GraphForecast />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
