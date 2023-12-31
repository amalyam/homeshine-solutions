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
          borderRadius: { xs: "none", sm: 2 },
          m: { md: 5, xl: 2 },
          marginLeft: { sm: "none", md: "40px" },
          backgroundColor: "rgba(33, 53, 55, 0.84)",
        }}
      >
        <Typography
          fontWeight={900}
          fontSize={36}
          textAlign="center"
          marginBottom={3}
          color="white"
        >
          <Image src={SudsHome} alt={"Suds Home Logo"} height={130} />
          <Box>
            <div>
              Cleaning, Restoration, & Repair
              <br />
              Rooftop to Curb!
            </div>
          </Box>
        </Typography>
        <Box
          sx={{
            display: "block",
            mx: "auto",
            maxWidth: "80%",
          }}
        >
          <Typography
            fontWeight={600}
            color="white"
            textAlign="left"
            lineHeight={1.7}
            fontSize={20}
          >
            Serving Greater Boston and the surronding areas, we specialize in:
          </Typography>
          <Typography
            fontWeight={800}
            fontSize={19}
            color="white"
            textAlign="left"
            sx={{ display: "flex", marginLeft: 4 }}
          >
            <List>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <HouseSidingIcon sx={{ marginRight: 1 }} />
                  Gutter cleaning + repair
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <WaterDamageOutlinedIcon sx={{ marginRight: 1 }} />
                  Siding soft wash
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <WaterDropOutlinedIcon sx={{ marginRight: 1 }} />
                  Pressure wash
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <WindowOutlinedIcon sx={{ marginRight: 1 }} />
                  Window washing
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RoofingIcon sx={{ marginRight: 1 }} />
                  Roof cleaning (moss, algae, and lichen treatment)
                </ListItemText>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ListItemText
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FoundationIcon sx={{ marginRight: 1 }} />
                  Deck restoration (clean, seal, stain, paint, replace)
                </ListItemText>
              </div>
            </List>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
