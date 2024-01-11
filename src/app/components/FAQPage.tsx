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
      <Stack alignItems="center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: offsetColor,
            maxWidth: "max-content",
            borderRadius: 1,
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
              fontSize={{ xs: "1.6rem", sm: "2.5rem" }}
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
          <Box sx={{ width: { xs: "25rem", sm: "45rem" } }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.faqText}>
                  Why should I choose HomeShine Solutions?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Answer coming soon</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.faqText}>
                  How does the Free Quote work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Answer coming soon</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.faqText}>
                  How do you determine your estimates?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Answer coming soon</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.faqText}>
                  Are you insured?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Yes!</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.faqText}>
                  Will you pressure wash my roof and siding?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Answer coming soon</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.faqText}>
                  What chemicals do you use?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Answer coming soon</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.faqText}>
                  Why does my roof still look dirty after treatment?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Answer coming soon</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.faqText}>
                  Do I need to be home while you provide service?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Answer coming soon</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Paper>
      </Stack>
    </Box>
  );
}
