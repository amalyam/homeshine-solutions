"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import BackgroundImage from "/src/images/Gutter_Clean_3.jpg";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import styles from "../styles.module.css";
import Typography from "@mui/material/Typography";
const offsetColor = "rgba(0, 162, 212, 0.24)";

export default function FAQPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: `no-repeat center/cover url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        height: "100%",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
        backgroundPosition: "top",
      }}
    >
            <div>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Why should I choose HomeShine Solutions?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={styles.faqText}>Answer</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    How does the Free Quote work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Answer</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    How do you determine your estimates?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Answer</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Are you insured?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Answer</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Will you pressure wash my roof and siding?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Answer</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    What chemicals do you use?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Answer</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Why does my roof still look dirty after treatment?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Answer</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={styles.faqText}>
                    Do I need to be home while you work on my home?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Answer</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Paper>
        </Stack>
      </div>
    </Box>
  );
}
