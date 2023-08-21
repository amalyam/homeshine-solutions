"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { Theme, useTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { FormHelperText } from "@mui/material";

/* 
address

Checkboxes for services you're interested in
Other (please describe below)
gutter cleaning
- linear ft of gutter
- no stories
- pitch of house

soft wash:
- sq ft of siding or roof

-add popup to message box when selected with prompt for details to include 

How did you hear about HomeShine?



What can we help you with?

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

function MultipleSelectChip() {
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
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="how-did-you-hear-about-us">
          How did you hear about us?
        </InputLabel>
        <Select
          labelId="how-did-you-hear-about-us"
          id="how-did-you-hear-about-us"
          multiple
          value={optionText}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
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
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          m: 1,
          border: 1,
          borderRadius: "10px",
        }}
      >
        <div>Contact Form</div>
        <div>
          <div>
            <TextField
              id="name"
              label="Name"
              type="string"
              variant="standard"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div>
            <TextField
              id="email"
              label="Email"
              type="string"
              variant="standard"
              placeholder="janedoe@gmail.com"
            />
          </div>
          <div>
            <TextField
              id="phone"
              label="Phone Number"
              type="tel"
              variant="standard"
              placeholder="(888) 888-8888"
            />
          </div>
          <div>
            <TextField
              id="zip"
              label="Zip Code"
              type="text"
              variant="standard"
              placeholder=""
              inputProps={{
                pattern: "[0-9]{5}",
                minlength: "5",
                maxlength: "5",
              }}
            />
          </div>
          <FormGroup aria-label="services">
            <div>
              <FormControlLabel
                value="gutters"
                control={<Checkbox />}
                label="Gutters"
                labelPlacement="end"
                sx={{ display: "inline" }}
              />
              <FormControlLabel
                value="moss"
                control={<Checkbox />}
                label="Moss Treatment"
                labelPlacement="end"
                sx={{ display: "inline" }}
              />
              <FormControlLabel
                value="soft wash"
                control={<Checkbox />}
                label="Soft Wash"
                labelPlacement="end"
                sx={{ display: "inline" }}
              />
            </div>
            <div>
              <FormControlLabel
                value="pressure wash"
                control={<Checkbox />}
                label="Pressure Wash"
                labelPlacement="end"
                sx={{ display: "inline" }}
              />
              <FormControlLabel
                value="solar"
                control={<Checkbox />}
                label="Solar Panels"
                labelPlacement="end"
                sx={{ display: "inline" }}
              />
              <FormControlLabel
                value="other"
                control={<Checkbox />}
                label="Other"
                labelPlacement="end"
                sx={{ display: "inline" }}
              />
            </div>
            <FormHelperText>*You may select more than one</FormHelperText>
          </FormGroup>
          <MultipleSelectChip />
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
          />
          <div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </Container>
  );
}
