import Box from "@mui/material/Box";
import ContactForm from "./components/ContactForm";
import CleanRoof from "/src/images/clean-roof.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import IntroText from "./components/IntroText";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${CleanRoof.src})`,
        backgroundSize: "stretch",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        justifyContent: "space-around",
        height: "300%",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
      }}
    >
      <Grid
        container
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Grid
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IntroText />
        </Grid>
        <Grid xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <ContactForm />
        </Grid>
      </Grid>
      <Stack sx={{ display: { xs: "flex", md: "none" } }}>
        <Box display="flex" flexGrow={1} py="25rem"></Box>
        <IntroText />
        <ContactForm />
      </Stack>
    </Box>
  );
}
