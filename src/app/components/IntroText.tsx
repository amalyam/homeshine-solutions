import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function IntroText() {
  return (
    <Container sx={{ m: 3, display: "flex" }}>
      <Paper sx={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}>
        <Box>
          <Typography fontWeight={700} color="inherit">
            Protect your home with professional routine maintenance. We provide
            meticulous cleaning, guaranteed to extend the life of your home. We
            specialize in: Gutters Moss Treatment Solar panels Soft wash Window
            Cleaning
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
