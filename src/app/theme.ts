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
  typography: {
    h6: {
      height: 2,
      width: 28,
      display: "block",
      marginTop: 0.5,
      background: "currentColor",
    },
  },
});

export default theme;
