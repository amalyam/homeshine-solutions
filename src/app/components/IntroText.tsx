import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import theme from "../theme";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export default function IntroText() {
  return (
    <Container>
      <Paper
        sx={{
          backgroundColor: "white",
          opacity: 0.5,
        }}
      >
        <Card sx={{ backgroundColor: "white" }}>
          <Box>
            <Typography fontWeight={700}>
              Protect your home with professional routine maintenance. We
              provide meticulous cleaning, guaranteed to extend the life of your
              home. We specialize in: Gutters Moss Treatment Solar panels Soft
              wash Window Cleaning
            </Typography>
          </Box>
        </Card>
      </Paper>
    </Container>
  );
}
