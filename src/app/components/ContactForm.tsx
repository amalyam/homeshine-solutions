"use client";
import React from "react";
import { useState } from "react";
import Alert, { AlertColor } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CloseIcon from "@mui/icons-material/Close";
import FormFields from "../types/FormFields";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Unstable_Grid2";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import Snackbar from "@mui/material/Snackbar";
import {
  FormContainer,
  TextFieldElement,
  MultiSelectElement,
} from "react-hook-form-mui";

/* 
TODO
fix weird chip selector behavior 
typography - make chip "What..." text smaller
sm: "Services?" "Referral?" lg: full text

Details you might include as relevant to your project:
- linear ft of gutter
- no. stories
- pitch of house
- sq ft of siding or roof

-add popup to message box when selected with prompt for details to include 

*/

const submissionAlertText = (alertSeverity: AlertColor) =>
  alertSeverity === "success"
    ? "Success! A confirmation email has been sent to your inbox. If you do not see it within a few minutes, please check your spam folder. We aim to respond within 24 hours."
    : "Please fill out all fields as required.";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const referralOptions = [
  "Yelp",
  "Leaflet",
  "Facebook",
  "Google",
  "Word of mouth",
  "Saw HomeShine at work",
  "Other - tell us more below!",
];

const serviceOptions = [
  "Gutter Cleaning",
  "Gutter Repair",
  "Downspout Installation",
  "Roof Cleaning",
  "Siding Wash",
  "Pressure Wash",
  "Window Washing",
  "Deck Restoration",
  "Tree Trimming",
  "Other - explain below",
];

const ContactFormContainer = FormContainer as typeof FormContainer<FormFields>;

export default function ContactForm() {
  const [openAlert, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("error");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setAlertOpen(false);
  };

  return (
    <Card
      elevation={24}
      sx={{
        borderRadius: "10px",
        p: 2,
        m: 3,
        flex: "0 1 50%",
      }}
      id="contactForm"
    >
      <ContactFormContainer
        defaultValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          zip: "",
          message: "",
        }}
        onSuccess={async (data) => {
          await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ data }),
            headers: { "Content-Type": "application/json" },
          });

          setAlertSeverity("success");
          setAlertOpen(true);
        }}
        onError={() => {
          setAlertSeverity("error");
          setAlertOpen(true);
        }}
      >
        <Box
          sx={{
            display: "block",
            justifyContent: "left",
            m: 1,
          }}
        >
          {openAlert && (
            <Alert
              severity={alertSeverity}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {submissionAlertText(alertSeverity)}
            </Alert>
          )}
          <CardHeader
            title="Free Quote"
            sx={{ display: "center", paddingBottom: 0 }}
          />
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={1} justifyContent="flex-end">
              <Grid xs={6}>
                <TextFieldElement
                  name={"name"}
                  id="name"
                  label="Name"
                  type="string"
                  variant="standard"
                  placeholder="Jane Doe"
                  required
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid xs={6}>
                <TextFieldElement
                  name={"zip"}
                  id="zip"
                  label="Zip Code"
                  type="text"
                  variant="standard"
                  placeholder="00000"
                  inputProps={{
                    pattern: "[0-9]{5}",
                    minlength: "5",
                    maxlength: "10",
                  }}
                  required
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid xs={6}>
                <TextFieldElement
                  name={"email"}
                  id="email"
                  label="Email"
                  type="string"
                  variant="standard"
                  placeholder="janedoe@gmail.com"
                  required
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid xs={6}>
                <TextFieldElement
                  name={"phone"}
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  variant="standard"
                  placeholder="(888) 888-8888"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid xs={12}>
                <TextFieldElement
                  name={"address"}
                  id="address"
                  label="Address"
                  type="string"
                  variant="standard"
                  multiline
                  rows={3}
                  placeholder="111 Main St."
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid xs={6}>
                <MultiSelectElement
                  label="Services of interest?"
                  id="services"
                  name={"services"}
                  multiple
                  input={<Input id="select-multiple-chip" />}
                  options={serviceOptions}
                  showChips
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                        width: 350,
                      },
                    },
                  }}
                  formControlProps={{
                    style: {
                      width: "100%",
                    },
                  }}
                ></MultiSelectElement>
                <FormHelperText>You may select more than one</FormHelperText>
              </Grid>
              <Grid xs={6}>
                <MultiSelectElement
                  label="Referral source?"
                  id="referral-source"
                  name={"referralSource"}
                  multiple
                  input={<Input id="select-multiple-chip" />}
                  options={referralOptions}
                  showChips
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                        width: 350,
                      },
                    },
                  }}
                  formControlProps={{
                    style: {
                      width: "100%",
                    },
                  }}
                ></MultiSelectElement>
                <FormHelperText>You may select more than one</FormHelperText>
              </Grid>
              <TextFieldElement
                name={"message"}
                id="message"
                label="Message"
                type="string"
                variant="standard"
                multiline
                rows="4"
                placeholder="What can we help you with?"
                helperText="What can we help you with?"
                required
                sx={{ width: "100%" }}
                inputProps={{ style: { resize: "vertical" } }}
              />
              <Typography
                variant="caption"
                style={{ alignSelf: "flex-end", color: "rgba(0,0,0,0.6)" }}
              >
                * indicates a required field
              </Typography>
            </Grid>
          </CardContent>
          <CardActions sx={{ paddingLeft: 2 }}>
            <Button
              variant="contained"
              sx={{
                py: 1,
                px: 3,
                fontSize: ".99rem",
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.light,
                },
              }}
              type="submit"
            >
              Submit
            </Button>
          </CardActions>
          <Snackbar
            open={openAlert}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{ display: { xs: "", sm: "none" } }}
          >
            <Alert
              onClose={handleClose}
              severity={alertSeverity}
              sx={{ width: "100%" }}
            >
              {submissionAlertText(alertSeverity)}
            </Alert>
          </Snackbar>
        </Box>
      </ContactFormContainer>
    </Card>
  );
}
