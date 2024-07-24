import { createTheme } from "@mui/material";
import { red,blue, green } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: blue[500], // You can use any shade of blue
      },
      secondary: {
        main: red[500], // You can use any shade of pink
      },
      green:{
        main:green[500]
      }
    },
  });