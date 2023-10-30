"use client";

import * as React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Grid from "@mui/material/Unstable_Grid2";
import Icon from "@mui/material/Icon";
import Image from "next/image";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
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

function ConnectWithUs() {
  return (
    <>
      <Typography
        fontWeight={500}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        CONNECT WITH US
      </Typography>
      <Link
        color={theme.palette.footer.dark}
        href="https://www.yelp.com/biz/home-shine-solutions-somerville"
        rel="noopener noreferrer"
        target="_blank"
        sx={{
          "&:hover": {
            color: theme.palette.footer.main,
          },
        }}
      >
        <Icon
          baseClassName="fa-brands"
          className="fa-yelp"
          sx={{
            color: theme.palette.footer.dark,
            "&:hover": {
              color: theme.palette.footer.main,
            },
          }}
        />
      </Link>
      <Link
        color={theme.palette.footer.dark}
        href="https://www.facebook.com/profile.php?id=100095591493494&mibextid=LQQJ4d"
        rel="noopener noreferrer"
        target="_blank"
        sx={{
          "&:hover": {
            color: theme.palette.footer.main,
          },
        }}
      >
        <FacebookOutlinedIcon />
      </Link>
    </>
  );
}

      <Stack
        justifyContent="left"
        spacing={1}
        marginBottom={0.75}
        sx={{ display: { xs: "flex", s: "none" } }}
      >
        <LogoPrivacyTerms />
        <ConnectWithUs />
        <Copyright />
      </Stack>
      <Grid
        container
        sx={{
          display: { xs: "none", s: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
          <LogoPrivacyTerms />
        </Grid>
          <ConnectWithUs />
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
