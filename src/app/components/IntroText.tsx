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
          backgroundColor: "rgba(83, 208, 254, 0.5)",
        }}
      >
        <Paper
          sx={{ p: 2, blockSize: "fit-content", backgroundColor: "primary" }}
        >
          <Typography
            fontWeight={700}
            color="inherit"
            textAlign="center"
            textTransform={"uppercase"}
          >
            Protect your home with professional routine maintenance!
          </Typography>
          <br />
          <Typography fontWeight={700} color="inherit" textAlign="center">
            We provide meticulous cleaning, guaranteed to extend the life of
            your home. We specialize in:
            <List>
              <ListItemText>Gutters</ListItemText>
              <ListItemText>Moss treatment</ListItemText>
              <ListItemText>Solar panels</ListItemText>
              <ListItemText>Soft wash</ListItemText>
              <ListItemText>Window cleaning</ListItemText>
            </List>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}
