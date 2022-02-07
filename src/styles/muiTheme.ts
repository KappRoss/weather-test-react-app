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
  // overrides: {
  //   MuiInputLabel: {
  //     outlined: {
  //       transform: "translate(14px, 12.5px) scale(1)"
  //     }
  //   },
  //   MuiOutlinedInput: {
  //     root: {
  //       "& $notchedOutline": {
  //         borderColor: "green"
  //       },
  //       "&:hover $notchedOutline": {
  //         borderColor: "red"
  //       },
  //       "&$focused $notchedOutline": {
  //         borderColor: "purple"
  //       },
  //       "&&& $input": {
  //         padding: "1px"
  //       }
  //     }
  //   }
  // }
});
