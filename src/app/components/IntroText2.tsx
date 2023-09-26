import { List, ListItemText } from "@mui/material";
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
          backgroundColor: "rgba(83, 208, 254, 0.5)",
        }}
      >
        <Typography
          fontWeight={700}
          color="inherit"
          textAlign="center"
          textTransform={"uppercase"}
        >
          Protect your home with routine professional maintenance!
        </Typography>
      </Box>
    </div>
  );
}