import Box from "@mui/material/Box";
import ConstructionIcon from "@mui/icons-material/Construction";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import RoofingIcon from "@mui/icons-material/Roofing";
import Typography from "@mui/material/Typography";

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
          marginBottom={4}
          //style={{ color: theme.palette.primary.main }}
          color="white"
        >
          Protect your home with routine professional maintenance!
        </Typography>
        <div style={{ marginLeft: 40 }}>
          <Typography fontWeight={600} color="white" textAlign="left">
            We provide cleaning and restoration solutions from rooftop to curb,
            <br />
            specializing in the following services:
          </Typography>
          <Typography
            fontWeight={800}
            color="white"
            textAlign="left"
            sx={{ display: "flex", marginLeft: 4 }}
          >
            <List>
              <ListItemText>
                <RoofingIcon sx={{ marginRight: 1 }} />
                Gutter cleaning
              </ListItemText>
              <ListItemText>
                <ConstructionIcon sx={{ marginRight: 1 }} />
                Moss, algae, and ListItemTextchen treatment
              </ListItemText>
              <ListItemText>
                <RoofingIcon sx={{ marginRight: 1 }} />
                Deck restoration (clean, seal, stain, paint, replace)
              </ListItemText>
              <ListItemText>
                <ConstructionIcon sx={{ marginRight: 1 }} />
                Soft wash
              </ListItemText>
              <ListItemText>
                <RoofingIcon sx={{ marginRight: 1 }} />
                Pressure wash
              </ListItemText>
              <ListItemText>
                <ConstructionIcon sx={{ marginRight: 1 }} />
                Window cleaning
              </ListItemText>
              <ListItemText>
                <RoofingIcon sx={{ marginRight: 1 }} />
                Tree + hedge trimming
              </ListItemText>
            </List>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
