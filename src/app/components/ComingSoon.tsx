"use client";

import Box from "@mui/material/Box";
import MossHand from "/src/images/moss-hand-3.jpg";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";
import theme from "../theme";
import CleanSteps from "/src/images/clean-steps.jpg";

export default function ComingSoon() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: `no-repeat center/cover url(${CleanSteps.src})`,
      }}
    >
      <Box
        sx={{
          backgroundColor: alpha(theme.palette.grey[500], 0.5),
        }}
      >
        <Typography fontSize="8rem" color={theme.palette.primary.main}>
          COMING SOON
        </Typography>
      </Box>
    </div>
  );
}
