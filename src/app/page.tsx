import Box from "@mui/material/Box";
import ContactForm from "./components/ContactForm";
import CleanRoof from "/src/images/clean-roof.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import IntroText from "./components/IntroText";

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
        height: "100%",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid xs={6.5} sx={{ display: "flex", alignItems: "center" }}>
          <IntroText />
        </Grid>
        <Grid xs={5.5}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
}
