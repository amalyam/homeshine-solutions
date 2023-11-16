"use client";

import { ReactNode, useState, SyntheticEvent } from "react";
import BackgroundImage from "/src/images/Gutter_Clean_3.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
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
          <Stack direction="row">
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
            <Box sx={{ width: 600 }}>
              <TabPanel value={value} index={0}>
                <Typography>
                  <ul>
                    <li>
                      Removal of leaves, sticks and soil from the gutter lines
                    </li>
                    <br />
                    <li>
                      Full flush of lines and downspouts
                      <ul>
                        <li>
                          removes debris that otherwise catches additional
                          debris and causes premature blockage
                        </li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      When needed, I also perform repairs on all gutter types,
                      including:
                      <ul>
                        <li>gutter/downspout reattachment</li>
                        <li>downspout replacement</li>
                        <li>replacement of gutter line sections</li>
                        <li>leak repair</li>
                      </ul>
                    </li>
                  </ul>
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography></Typography>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography></Typography>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Typography></Typography>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Typography></Typography>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Typography></Typography>
              </TabPanel>
            </Box>
          </Stack>
        </Paper>
      </div>
    </Box>
  );
}
