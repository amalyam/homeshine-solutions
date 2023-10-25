"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import theme from "../theme";

function Copyright() {
  return (
    <div>
      ©{new Date().getFullYear()} HomeShine Solutions, LLC. All rights reserved.
    </div>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{
        bgcolor: theme.palette.footer.light,
        py: 1.5,
        fontSize: ".75rem",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid xs={4}></Grid>
        <Grid xs={4} sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
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
            href="/Privacy/"
            color={theme.palette.footer.dark}
            underline="none"
            sx={{
              "&:hover": {
                color: theme.palette.footer.main,
              },
            }}
          >
            Privacy
          </Link>
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
        </Grid>
        <Grid
          xs={4}
          sx={{ display: "flex", justifyContent: "flex-end", pr: 3 }}
        >
          <Copyright />
        </Grid>
      </Grid>
    </Typography>
  );
}
