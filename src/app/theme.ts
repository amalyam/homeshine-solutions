"use client";

import { createTheme } from "@mui/material/styles";
import { blueGrey, cyan, grey } from "@mui/material/colors";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

declare module "@mui/material/styles" {
  interface Palette {
    footer: Palette["primary"];
  }

  interface PaletteOptions {
    footer?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#000000",
    },
    secondary: {
      main: cyan[500],
    },
    info: {
      main: grey[600],
    },
    footer: {
      light: blueGrey[50],
      main: "#008394",
      dark: grey[900],
    },
  },
  typography: {
    allVariants: {
      ...montserrat.style,
    },
  },
});

export default theme;
