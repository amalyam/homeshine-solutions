"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import BackgroundImage from "/src/images/Gutter_Clean_3.jpg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import styles from "../styles.module.css";
import Typography from "@mui/material/Typography";

const offsetColor = "rgba(0, 162, 212, 0.24)";

//white - margin 11px
//blue - border radius4px

export default function FAQPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: `no-repeat center/cover url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        minHeight: "100% 100%",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
        backgroundPosition: "top",
      }}
    >
      <Container>
        <Stack alignItems="center">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: offsetColor,
              maxWidth: "max-content",
              borderRadius: 1,
              marginTop: { xs: "13px", sm: "none" },
            }}
          >
            <Paper
              sx={{
                backgroundColor: "white",
                margin: 1.2,
                padding: 2,
              }}
            >
              <Typography
                fontWeight={500}
                lineHeight={1}
                fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.5rem" }}
                textAlign="center"
              >
                Frequently Asked Questions
              </Typography>
            </Paper>
          </Box>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: offsetColor,
              margin: 4,
              padding: 2,
            }}
          >
            <Box sx={{ width: { xs: "95vw", sm: "45rem" } }}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Why should I choose HomeShine Solutions?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Choose us because we are obsessed with our craft and because
                    our aim is to provide you with greater value than any other
                    competitor. We are constantly thinking about how to perfect
                    our methods and bring you better cleaning, repair and
                    restoration services. Extending your home’s ability to
                    remain weatherproof, leak proof, frost proof, and a pleasure
                    to live in is our number one priority. We stress about the
                    minute details so that you don’t have to.
                    <br />
                    <br />
                    In addition to these services, we are committed to providing
                    our customers with knowledge about the factors affecting
                    their homes and the methods we use. This way, we can work as
                    a team to keep your home in the best condition possible.
                    <br />
                    <br />
                    We also pride ourselves on the honesty we bring to the job.
                    We will never try to sell you a service you don’t need!
                    Building trust with our customers is very important to us.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    How does the Free Quote work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    A free quote for any HomeShine service begins with
                    completing the contact form so we can get a better sense of
                    your needs and any pertinent information.
                    <br />
                    <br />
                    Expect a call, text, or email within 24 hours. From there,
                    we can schedule an in person visit for an exact quote on the
                    spot, or provide a near estimate based on google maps images
                    of your home, the square footage of relevant surfaces, and
                    any other information you can provide.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    How do you determine your estimates?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Estimates are created by taking the following factors into
                    account, and simply calculating the cost of service:
                    <br />
                    - Square footage
                    <br />
                    - Severity of the growth, stain, damage or soil
                    <br />
                    - Accessibility of the job (height, roof pitch, uniquely
                    difficult locations)
                    <br />
                    - Material costs
                    <br />
                    - Estimated labor time
                    <br />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Are you insured?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes! We are fully insured for property damage, injury, and
                    general liability to work on buildings up to 3 stories in
                    height. We are happy to provide proof of coverage.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Will you pressure wash my roof and siding?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We will NEVER “pressure wash” a shingle roof, cedar shake,
                    wood lap, or vinyl siding. These surfaces are not designed
                    to withstand more than a few hundred pounds per square inch
                    of pressure. In order to avoid your loss of insurance
                    coverage, and the possibility of voiding manufacturer
                    warranties, on these surfaces we use only manufacturer
                    approved methods: gentle (but tough) solutions, elbow grease
                    if needed, and a low pressure “soft wash”.
                    <br />
                    <br />
                    We save the pressure washing for concrete, brick and other
                    surfaces designed to withstand it.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    What chemicals do you use?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Our guiding principles with chemical solutions are:
                    <br />
                    1. We exclusively use 100% rapid biodegrade solutions
                    (within 24 hours with water, sun and air).
                    <br />
                    2. Chemical solutions are only used when necessary.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Why does my roof still look dirty after treatment?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The growths common to shingle roofs in New England include
                    black green algae, many species of moss, and variety of
                    lichen. All three attach themselves to the shingle in such a
                    way that to just blast them off would remove precious
                    asphalt granules as well, only exacerbating the damage.
                    <br />
                    <br />
                    For this reason, we follow manufacturer and shingle
                    maintenance guidelines to kill the growth, and allow it to
                    detach and fall away with the weather.
                    <br />
                    <br />
                    Most roofs will be entirely free of growth in 0 - 20 weeks.
                    <br />
                    <br />
                    If your home has bits of dead moss or algae remaining, don’t
                    worry - it will be spotless soon! In the meantime, be proud
                    that you were proactive and rest assured that it can no
                    longer do damage to your shingles.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Do I need to be home while you provide service?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    In most cases, no one needs to be home. However, we do ask
                    that water spigots are turned on and all windows are closed.
                    We provide a full sweep of photos or videos of your property
                    before service and after.
                    <br />
                    <br />
                    If requested, we can also use this time to evaluate your
                    home for any other concerns to keep an eye on.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
