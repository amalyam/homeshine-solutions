import ContactForm from "./components/ContactForm";
import Image from "next/image";
import LogoAndServices from "/src/images/logo-and-services.jpg";
import CleanRoof from "/src/images/clean-roof.jpg";

/* 
TODO create color theme based on Homeshine logo
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
    <div style={{ backgroundImage: `url(${CleanRoof.src})`, height: "100vh" }}>
      <ContactForm />
    </div>
  );
}
