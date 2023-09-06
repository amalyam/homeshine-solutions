import ContactForm from "./components/ContactForm";
import CleanRoof from "/src/images/clean-roof.jpg";
import IntroText from "./components/IntroText";
import Grid from "@mui/material/Unstable_Grid2";

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
    <div
      style={{
        backgroundImage: `url(${CleanRoof.src})`,
        height: "100vh",
      }}
    >
      <Grid container spacing={2} display={"flex"} m={3}>
        <Grid xs={12} sm={6}>
          <IntroText />
        </Grid>
        <Grid xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}
