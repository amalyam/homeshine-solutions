import Box from "@mui/material/Box";
import ContactForm from "./components/ContactForm";
import CleanRoof from "/src/images/clean-roof.jpg";
import IntroText from "./components/IntroText";

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
    <div>
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
        }}
      >
        <IntroText />
        <ContactForm />
      </Box>
    </div>
  );
}
