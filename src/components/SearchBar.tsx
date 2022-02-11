import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { createStyles, makeStyles } from "@mui/styles";
import { InputBase, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../hooks/redux";
import { setSearchedCity, setSearchСoords } from "../store/reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "white",
      "&:hover": { backgroundColor: "whitesmoke" },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      height: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      minWidth: 360,
      height: "100%",
      "& .MuiInputBase-input": {
        width: "100%",
        height: "100%",
        padding: theme.spacing(0, 0, 0, 6),
      },
      "& .MuiInputBase-input:hover, :focus": {
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRadius: theme.spacing(0.5),
      },
    },
  })
);

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autoC: google.maps.places.Autocomplete) =>
    setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const searchedCity = autocomplete.getPlace().name;
      const lat = autocomplete.getPlace().geometry?.location?.lat();
      const lng = autocomplete.getPlace().geometry?.location?.lng();

      if (lat && lng) {
        dispatch(setSearchedCity(searchedCity || ""));
        dispatch(setSearchСoords({ lat, lng }));
      }
    }
  };

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          id="search-city"
          placeholder="Search…"
          classes={{ root: classes.inputRoot }}
        />
      </div>
    </Autocomplete>
  );
};

export default SearchBar;
