import React from "react";
import { Switch, Theme } from "@mui/material";
import { useAppDispatch } from "../hooks/redux";
import { setTemperatureScale } from "../store/reducers";
import Box from "@mui/material/Box";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingRight: theme.spacing(1),
    },
  })
);

const SwitcherScale = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    dispatch(setTemperatureScale(checked));
  };

  return (
    <Box className={classes.container}>
      {"°C"}
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      {"°F"}
    </Box>
  );
};

export default SwitcherScale;
