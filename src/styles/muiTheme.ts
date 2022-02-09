import { createTheme } from "@mui/material/styles";
import { yellow, blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[400],
      light: blue[100],
      dark: blue[700],
    },
    secondary: {
      main: yellow[500],
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-root": {
            background: "white",
          },
        },
      },
    },
  },
});
