import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
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
          blockSize: "fit-content",
          borderRadius: 2,
          m: 2,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        }}
      >
        <Typography
          fontWeight={900}
          fontSize={36}
          color="inherit"
          textAlign="center"
          textTransform={"uppercase"}
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
              <li>Deck restoration</li>
              <li>Soft wash</li>
            </ul>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
