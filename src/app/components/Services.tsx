"use client";

import { ReactNode, useState, SyntheticEvent } from "react";
import BackgroundImage from "/src/images/Gutter_Clean_3.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import theme from "../theme";
import Typography from "@mui/material/Typography";

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
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
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
            backgroundColor: "white",
            margin: 8,
            padding: 3,
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
          <div>
            <Box
              sx={{
                borderRight: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="services"
                indicatorColor="secondary"
                textColor="secondary"
              >
                <Tab label="Gutter Cleaning + Repair" {...a11yProps(0)} />
                <Tab label="Siding Soft Wash" {...a11yProps(1)} />
                <Tab label="Pressure Wash" {...a11yProps(2)} />
                <Tab label="Window Washing" {...a11yProps(3)} />
                <Tab label="Roof Cleaning" {...a11yProps(4)} />
                <Tab label="Deck Restoration" {...a11yProps(5)} />
              </Tabs>
            </Box>
          </Stack>
        </Paper>
      </div>
    </Box>
  );
}
