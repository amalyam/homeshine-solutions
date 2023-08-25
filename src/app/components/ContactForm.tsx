"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { Theme, styled, useTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

/* 
TODO
get checkboxes to not turn white on

Checkboxes for services you're interested in
Other (please describe below)
gutter cleaning
- linear ft of gutter
- no stories
- pitch of house

soft wash:
- sq ft of siding or roof

-add popup to message box when selected with prompt for details to include 

*/

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350,
    },
  },
};

const options = [
  "Leaflet",
  "Facebook",
  "Yelp",
  "Google",
  "Word of mouth",
  "Saw a RoofPro serving another location",
  "Other - tell us more below!",
];

function getStyles(
  option: string,
  optionText: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      optionText.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function ServicesSelectionChip() {
  const theme = useTheme();
  const [optionText, setOptionText] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof optionText>) => {
    const {
      target: { value },
    } = event;
    setOptionText(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 300, my: 1 }}>
        <InputLabel id="how-did-you-hear-about-us-label">
          How did you hear about us?
        </InputLabel>
        <Select
          labelId="how-did-you-hear-about-us-label"
          id="how-did-you-hear-about-us"
          multiple
          value={optionText}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, optionText, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>*You may select more than one</FormHelperText>
      </FormControl>
    </div>
  );
}

export default function ContactForm() {
  return (
    <Container sx={{ m: 3, maxWidth: "fit-content" }}>
      <Card
        sx={{
          maxWidth: "fit-content",
          borderRadius: "10px",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            m: 1,
          }}
        >
          <div>
            <CardHeader
              title="Free Quote"
              sx={{ display: "center", paddingBottom: 0 }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <FormGroup sx={{ marginTop: 0, marginBottom: 3 }}>
                <div>
                  <TextField
                    id="name"
                    label="Name"
                    type="string"
                    variant="standard"
                    placeholder="Jane Doe"
                    required
                    sx={{ width: "75%" }}
                  />
                </div>
                <div>
                  <TextField
                    id="email"
                    label="Email"
                    type="string"
                    variant="standard"
                    placeholder="janedoe@gmail.com"
                    sx={{ width: "75%" }}
                  />
                </div>
                <div>
                  <TextField
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    variant="standard"
                    placeholder="(888) 888-8888"
                    sx={{ width: "75%" }}
                  />
                </div>
                <div>
                  <TextField
                    id="address"
                    label="Address"
                    type="string"
                    variant="standard"
                    multiline
                    rows={3}
                    placeholder="111 Main St."
                  />
                </div>
                <div>
                  <TextField
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
                    sx={{ width: "20%" }}
                  />
                </div>
              </FormGroup>
              <Typography sx={{ marginBottom: 0.75 }}>
                What services are you interested in?
              </Typography>
              <FormGroup aria-label="services">
                <div>
                  <FormControlLabel
                    value="gutters"
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: theme.palette.secondary.dark,
                          },
                        }}
                      />
                    }
                    label="Gutters"
                    labelPlacement="end"
                    sx={{
                      display: "inline",
                    }}
                  />
                  <FormControlLabel
                    value="moss"
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: theme.palette.secondary.dark,
                          },
                        }}
                      />
                    }
                    label="Moss Treatment"
                    labelPlacement="end"
                    sx={{ display: "inline" }}
                  />
                  <FormControlLabel
                    value="soft wash"
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: theme.palette.secondary.dark,
                          },
                        }}
                      />
                    }
                    label="Soft Wash"
                    labelPlacement="end"
                    sx={{ display: "inline" }}
                  />
                </div>
                <div>
                  <FormControlLabel
                    value="pressure wash"
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: theme.palette.secondary.dark,
                          },
                        }}
                      />
                    }
                    label="Pressure Wash"
                    labelPlacement="end"
                    sx={{ display: "inline" }}
                  />
                  <FormControlLabel
                    value="solar"
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: theme.palette.secondary.dark,
                          },
                        }}
                      />
                    }
                    label="Solar Panels"
                    labelPlacement="end"
                    sx={{ display: "inline" }}
                  />
                  <FormControlLabel
                    value="other"
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: theme.palette.secondary.dark,
                          },
                        }}
                      />
                    }
                    label="Other"
                    labelPlacement="end"
                    sx={{ display: "inline" }}
                  />
                </div>
                <FormHelperText sx={{ marginTop: 0, marginBottom: 3 }}>
                  *You may select more than one
                </FormHelperText>
              </FormGroup>
              <ServicesSelectionChip />
              <TextField
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
          </div>
        </Box>
      </Card>
    </Container>
  );
}
