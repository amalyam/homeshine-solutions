import Box from "@mui/material/Box";
import ContactForm from "./components/ContactForm";
import CleanRoof from "/src/images/clean-roof.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import IntroText2 from "./components/IntroText2";

/* 
TODO 
get  background image to cover full length of contact form

create color theme based on Homeshine logo
primary white
teal
yellow
text black


<Image
src={LogoAndServices}
width={781.5}
height={374}
alt="logo-and-services"
placeholder="blur"
/> */

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
          <IntroText2 />
        </Grid>
        <Grid xs={5.5}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
}
