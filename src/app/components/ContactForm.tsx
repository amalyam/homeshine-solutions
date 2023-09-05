"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {
  FormContainer,
  TextFieldElement,
  MultiSelectElement,
} from "react-hook-form-mui";

/* 
TODO
fix weird chip selector behavior 

Details you might include as relevant to your project:
- linear ft of gutter
- no. stories
- pitch of house
- sq ft of siding or roof

-add popup to message box when selected with prompt for details to include 

*/

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const referralOptions = [
  "Leaflet",
  "Facebook",
  "Yelp",
  "Google",
  "Word of mouth",
  "Saw a RoofPro serving another location",
  "Other - tell us more below!",
];

const serviceOptions = [
  "Gutters",
  "Moss Treatment",
  "Soft Wash",
  "Pressure Wash",
  "Solar Panels",
  "Other",
];

export default function ContactForm() {
  return (
    <Container sx={{ display: "flex" }}>
      <Card
        elevation={24}
        sx={{
          borderRadius: "10px",
          p: 2,
          width: "40vw",
        }}
      >
        <FormContainer
          defaultValues={{
            name: "",
            email: "",
            phone: "",
            address: "",
            zip: "",
            message: "",
          }}
          onSuccess={(data) => {
            alert(JSON.stringify(data, undefined, 2));
          }}
        >
          <Box
            sx={{
              display: "block",
              justifyContent: "left",
              m: 1,
            }}
          >
            <CardHeader
              title="Free Quote"
              sx={{ display: "center", paddingBottom: 0 }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <FormGroup sx={{ marginTop: 0, marginBottom: 3 }}>
                <TextFieldElement
                  name={"name"}
                  id="name"
                  label="Name"
                  type="string"
                  variant="standard"
                  placeholder="Jane Doe"
                  required
                  sx={{ width: "75%" }}
                />
                <TextFieldElement
                  name={"email"}
                  id="email"
                  label="Email"
                  type="string"
                  variant="standard"
                  placeholder="janedoe@gmail.com"
                  sx={{ width: "75%" }}
                />
                <TextFieldElement
                  name={"phone"}
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  variant="standard"
                  placeholder="(888) 888-8888"
                  sx={{ width: "75%" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <TextFieldElement
                    name={"address"}
                    id="address"
                    label="Address"
                    type="string"
                    variant="standard"
                    multiline
                    rows={3}
                    placeholder="111 Main St."
                    style={{ paddingRight: 3 }}
                  />
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
                      maxlength: "5",
                    }}
                    required
                    sx={{ width: "35%" }}
                  />
                </div>
              </FormGroup>
              <FormControl sx={{ width: "100%", my: 1 }}>
                <MultiSelectElement
                  label="What services are you interested in?"
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
                ></MultiSelectElement>
                <FormHelperText>You may select more than one</FormHelperText>
              </FormControl>
              <FormControl sx={{ width: "100%", my: 1 }}>
                <MultiSelectElement
                  label="How did you hear about us?"
                  id="how-did-you-hear-about-us"
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
                ></MultiSelectElement>
                <FormHelperText>You may select more than one</FormHelperText>
              </FormControl>
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
          </Box>
        </FormContainer>
      </Card>
    </Container>
  );
}
