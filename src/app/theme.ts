"use client";

import { createTheme } from "@mui/material/styles";
import { yellow, cyan } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#000000",
    },
    secondary: {
      main: cyan[500],
    },
  },
});

export default theme;
