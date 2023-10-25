import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
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
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        }}
      >
        <Typography
          fontWeight={900}
          fontSize={36}
          color="inherit"
          textAlign="center"
          marginBottom={4}
        >
          Protect your home with routine professional maintenance!
        </Typography>
        <div style={{ marginLeft: 80 }}>
          <Typography fontWeight={600} color="inherit" textAlign="left">
            We provide cleaning and restoration solutions from rooftop to curb,
            <br />
            specializing in the following services:
          </Typography>
          <Typography fontWeight={800} color="inherit" textAlign="left">
            <ul>
              <li>Gutter cleaning</li>
              <li>Moss, algae, and lichen treatment</li>
              <li>Deck restoration (clean, seal, stain, paint, replace)</li>
              <li>Soft wash</li>
              <li>Pressure wash</li>
              <li>Window cleaning</li>
              <li>Tree + hedge trimming</li>
            </ul>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
