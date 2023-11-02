"use client";

import BackgroundImage from "/src/images/Gutter_Clean_3.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SyntheticEvent, useState } from "react";
import theme from "../theme";

export default function ServicesPage() {
  const [value, setValue] = useState("one");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: `no-repeat center/cover url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        height: "100%",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
        backgroundPosition: "top",
      }}
    >
      <div>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.5rem",
            backgroundColor: "white",
            margin: 8,
            padding: 4,
          }}
        >
          Services
        </Paper>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.5rem",
            backgroundColor: "white",
            margin: 8,
            padding: 4,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="services"
            orientation="vertical"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab value="gutters" label="Gutter Cleaning + Repair" />
            <Tab value="siding" label="Siding Soft Wash" />
            <Tab value="pressure" label="Pressure Wash" />
            <Tab value="window" label="Window Washing" />
            <Tab value="roof" label="Roof Cleaning" />
            <Tab value="deck" label="Deck Restoration" />
          </Tabs>
        </Paper>
      </div>
    </Box>
  );
}
