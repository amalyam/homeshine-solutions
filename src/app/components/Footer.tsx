"use client";

import * as React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Grid from "@mui/material/Unstable_Grid2";
import Icon from "@mui/material/Icon";
import Image from "next/image";
import Link from "@mui/material/Link";
import SudsHome from "/src/images/suds-home-transparent.svg";
import Typography from "@mui/material/Typography";
import theme from "../theme";

function LogoPrivacyTerms() {
  return (
    <>
      <Image
        src={SudsHome}
        alt={"Suds Home Logo"}
        height={40}
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "10px",
        }}
      />
      <Link
        href="/Privacy/"
        color={theme.palette.footer.dark}
        underline="none"
        sx={{
          "&:hover": {
            color: theme.palette.footer.main,
          },
        }}
      >
        Privacy Policy
      </Link>
      <Typography sx={{ mx: 1 }}>|</Typography>
      <Link
        href="/Terms/"
        color={theme.palette.footer.dark}
        underline="none"
        sx={{
          "&:hover": {
            color: theme.palette.footer.main,
          },
        }}
      >
        Terms & Conditions
      </Link>
    </>
  );
}
          <LogoPrivacyTerms />
        </Grid>
        <Grid
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            pr: 3,
          }}
        >
          <Copyright />
        </Grid>
      </Grid>
    </Typography>
  );
}
