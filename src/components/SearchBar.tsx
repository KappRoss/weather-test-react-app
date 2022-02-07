import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {},
  })
);

const SearchBar = () => {
  const classes = useStyles();

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <Autocomplete
      className={classes.searchBar}
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="City" />}
    />
  );
};

export default SearchBar;
