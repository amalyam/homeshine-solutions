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

let theme = createTheme({
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
  },
  typography: {
    allVariants: {
      ...montserrat.style,
    },
  },
});

theme = createTheme(theme, {
  palette: {
    footer: theme.palette.augmentColor({
      color: {
        light: blueGrey[50],
        main: theme.palette.secondary.dark,
        dark: grey[900],
      },
      name: "footer",
    }),
  },
});

export default theme;
