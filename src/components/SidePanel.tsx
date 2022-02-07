import React from "react";
import WeatherWidget from "./WeatherWidget";
import Box from "@mui/material/Box";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      display: "flex",
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      textAlign: "center",
      width: "100%",
      fontWeight: "bold",
      fontSize: 24,
    },
  })
);

const SidePanel = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>{"Weather Test App"}</Box>
      <Box>
        <WeatherWidget />
      </Box>
    </Box>
  );
};

export default SidePanel;
