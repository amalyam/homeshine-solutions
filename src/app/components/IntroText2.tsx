import Box from "@mui/material/Box";
import FoundationIcon from "@mui/icons-material/Foundation";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import Image from "next/image";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import RoofingIcon from "@mui/icons-material/Roofing";
import SudsHome from "/src/images/suds-home-transparent.svg";
import Typography from "@mui/material/Typography";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";

export default function IntroText() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          blockSize: "fit-content",
          borderRadius: 2,
          m: 2,
          marginLeft: 4,
          backgroundColor: "rgba(33, 53, 55, 0.84)",
        }}
      >
        <Typography
          fontWeight={900}
          fontSize={36}
          textAlign="center"
          marginBottom={3}
          //style={{ color: theme.palette.primary.main }}
          color="white"
        >
          Cleaning, Restoration, & Repair
          <br />
          Rooftop to Curb!
          <hr
            style={{
              display: "block",
              height: "1px",
              border: 0,
              borderTop: "1px solid #ccc",
              margin: "1em 0",
              padding: 0,
            }}
          />
          <Image src={SudsHome} alt={"Suds Home Logo"} height={100} />
        </Typography>
        <div style={{ marginLeft: 40 }}>
          <Typography
            fontWeight={600}
            color="white"
            textAlign="left"
            lineHeight={1.7}
          >
            Specializing in the following services:
          </Typography>
          <Typography
            fontWeight={800}
            color="white"
            textAlign="left"
            sx={{ display: "flex", marginLeft: 4 }}
          >
            <List>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText>
                  <HouseSidingIcon sx={{ marginRight: 1 }} />
                  Gutter cleaning + repair
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText>
                  <WaterDamageOutlinedIcon sx={{ marginRight: 1 }} />
                  Siding soft wash
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText>
                  <WaterDropOutlinedIcon sx={{ marginRight: 1 }} />
                  Pressure wash
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText>
                  <WindowOutlinedIcon sx={{ marginRight: 1 }} />
                  Window washing
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText>
                  <RoofingIcon sx={{ marginRight: 1 }} />
                  Roof cleaning (moss, algae, and lichen treatment)
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText>
                  <FoundationIcon sx={{ marginRight: 1 }} />
                  Deck restoration (clean, seal, stain, paint, replace)
                </ListItemText>
              </div>
            </List>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
