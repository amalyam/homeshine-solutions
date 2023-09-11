import ContactForm from "./components/ContactForm";
import CleanRoof from "/src/images/clean-roof.jpg";
import IntroText from "./components/IntroText";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

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
        height: "calc(100vh - 84px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          justifyContent: "space-around",
          height: "100%",
          alignItems: "center",
        }}
      >
        <IntroText />
        <ContactForm />
      </Box>
    </div>
  );
}
