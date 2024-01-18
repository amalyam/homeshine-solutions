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
        minHeight: "100% 100%",
        backgroundPosition: { xs: "top", sm: "top" },
        backgroundPositionX: { xs: "center", sm: "left" },
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
      <Box
        display={{ xs: "flex", sm: "none" }}
        flexGrow={1}
        m={{ xs: "none", sm: 2 }}
      ></Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IntroText />
        </Grid>
        <Grid xs={12} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
}
