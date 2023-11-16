"use client";

import BackgroundImage from "/src/images/Gutter_Clean_3.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SyntheticEvent, useState } from "react";
import theme from "../theme";
interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpane-${index}`,
  };
}

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
          <div>
            <Typography fontSize="2.5rem" textAlign="center">
              Services
            </Typography>
            <Typography padding={4}>
              Every service begins with a conversation about your needs and a
              quote.
              <br />
              <br />
              Along with your price quote, we provide detailed photos or video
              of your home, and a list of options to meet your needs and budget.
              <br />
              <br />
              At conclusion, you’ll receive photo/video confirmation of the
              before and after to ensure the quality of our work.
            </Typography>
          </div>
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
