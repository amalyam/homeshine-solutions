"use client";

import { ReactNode, useState, SyntheticEvent } from "react";
import BackgroundImage from "/src/images/deck-restoration-after.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import theme from "../theme";
import Typography from "@mui/material/Typography";
import FoundationIcon from "@mui/icons-material/Foundation";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import RoofingIcon from "@mui/icons-material/Roofing";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";

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
        minHeight: "100% 100%",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
        backgroundPosition: "top",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          blocksize: "fit-content",
          maxWidth: "90%",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
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
            <Typography padding={4} width={{ md: "auto", lg: 600 }}>
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
                selectionFollowsFocus
              >
                <Tab
                  label="Gutter Cleaning + Repair"
                  icon={<HouseSidingIcon />}
                  iconPosition="start"
                  {...a11yProps(0)}
                  sx={{ alignSelf: "start" }}
                />

                <Tab
                  label="Siding Soft Wash"
                  icon={<WaterDamageOutlinedIcon />}
                  iconPosition="start"
                  {...a11yProps(1)}
                  sx={{ alignSelf: "start" }}
                />

                <Tab
                  label="Pressure Wash"
                  icon={<WaterDropOutlinedIcon />}
                  iconPosition="start"
                  {...a11yProps(2)}
                  sx={{ alignSelf: "start" }}
                />
                <Tab
                  label="Window Washing"
                  icon={<WindowOutlinedIcon />}
                  iconPosition="start"
                  {...a11yProps(3)}
                  sx={{ alignSelf: "start" }}
                />

                <Tab
                  label="Roof Cleaning"
                  icon={<RoofingIcon />}
                  iconPosition="start"
                  {...a11yProps(4)}
                  sx={{ alignSelf: "start" }}
                />

                <Tab
                  label="Deck Restoration"
                  icon={<FoundationIcon />}
                  iconPosition="start"
                  {...a11yProps(5)}
                  sx={{ alignSelf: "start" }}
                />

                <Tab
                  label="Tree Trimming"
                  icon={<ParkOutlinedIcon />}
                  iconPosition="start"
                  {...a11yProps(6)}
                  sx={{ alignSelf: "start" }}
                />
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
                <Typography>
                  <ul>
                    <li>
                      Soft washing is often the choice when high pressure
                      cleaning might damage or mar the surface in question. This
                      is usually the case with most types of siding.
                    </li>
                    <br />
                    <li>
                      It can be used on
                      <ul>
                        <li>wood shake</li>
                        <li>vinyl</li>
                        <li>painted wood</li>
                        <li>brick</li>
                        <li>concrete</li>
                        <li>stucco</li>
                        <li>... and more</li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      We use low pressure and a gentle solution of rapidly
                      bio-degradable surfactants and PH adjusters to kill
                      growths like moss, algae, lichen, mildew and mold, remove
                      dirt and grime, leave the surface inhospitable to new
                      growth, and avoid damage to the siding.
                    </li>
                    <br />
                    <li>
                      With a siding wash, gutters, fascia, soffit, window
                      frames, and doors will also get a full wash.
                    </li>
                    <br />
                    <li>
                      Plants of all types and sizes can be protected in a
                      variety of ways.
                    </li>
                  </ul>
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography>
                  <ul>
                    <li>
                      With or without the aid of cleaning solutions, we expertly
                      select the appropriate power to deep clean hard surfaces,
                      remove paint, or blast away deep soiled grime and oil
                      stains.
                    </li>
                    <br />
                    <li>
                      Pressure washing can be used on:
                      <ul>
                        <li>brick</li>
                        <li>stone</li>
                        <li>concrete</li>
                        <li>wood</li>
                        <li>... and more</li>
                      </ul>
                    </li>
                  </ul>
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Typography>
                  <ul>
                    <li>
                      We go the extra mile to remove stubborn marks,
                      construction mess, and stuck-on grime.
                    </li>
                    <br />
                    <li>
                      We will clean:
                      <ul>
                        <li>panes</li>
                        <li>frames</li>
                        <li>sills</li>
                        <li>tracks</li>
                      </ul>
                    </li>
                  </ul>
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Typography>
                  <ul>
                    <li>
                      Like siding, roof shingles do not hold up to pressure
                      washing. In fact, all major shingle manufacturers and
                      insurance companies will void warrantees or drop coverage
                      for pressure washing a shingled roof. As such, we only use
                      soft washing to clean roofs.
                    </li>
                    <br />
                    <li>
                      We use low pressure and a gentle solution of rapidly
                      bio-degradable surfactants and PH adjusters to kill
                      growths like moss, algae, lichen, mildew and mold, remove
                      dirt and grime, leave the surface inhospitable to new
                      growth, and avoid damage to the siding.
                    </li>
                  </ul>
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Typography>
                  <ul>
                    <li>
                      Depending on the state of the wood, we can:
                      <ul>
                        <li>clean</li>
                        <li>treat</li>
                        <li>sand</li>
                        <li>fill</li>
                        <li>brighten</li>
                        <li>stain</li>
                        <li>paint</li>
                        <li>or replace boards</li>
                      </ul>
                    </li>
                    <br />
                    <li>
                      Along with renewing the boards, we take care to fix rust
                      marks, reset fasteners, and refasten boards as needed.
                    </li>
                  </ul>
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Typography>
                  <ul>
                    <li>
                      We generally provide tree trimming as an add-on service,
                      when trees are affecting parts of the home.
                    </li>
                    <br />
                    <li>
                      We will trim small to medium sized branches on trees up to
                      30 feet from the ground.
                    </li>
                  </ul>
                </Typography>
              </TabPanel>
            </Box>
          </Stack>
        </Paper>
      </div>
    </Box>
  );
}
