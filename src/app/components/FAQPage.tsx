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
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.5rem",
            backgroundColor: "white",
            margin: 8,
            padding: 4,
          }}
        >
          Frequently Asked Questions
        </Paper>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.5rem",
            backgroundColor: "white",
            margin: 8,
            padding: 4,
          }}
        >
          <AccordionGroup
            sx={{
              maxWidth: 400,
              [`& .${accordionSummaryClasses.indicator}`]: {
                transition: "0.2s",
              },
              [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
                {
                  transform: "rotate(45deg)",
                },
            }}
          >
            <Accordion>
              <AccordionSummary indicator={<AddIcon />}>
                Question 1
              </AccordionSummary>
              <AccordionDetails>Answer</AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </Paper>
      </div>
    </Box>
  );
}
