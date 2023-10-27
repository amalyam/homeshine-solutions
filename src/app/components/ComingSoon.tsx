"use client";

import Box from "@mui/material/Box";
import GutterClean3 from "/src/images/Gutter_Clean_3.jpg";
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
        background: `no-repeat center/cover url(${GutterClean3.src})`,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(33, 53, 55, 0.84)",
        }}
      >
        <Typography
          fontWeight={600}
          fontSize="6rem"
          color={theme.palette.primary.main}
          lineHeight={1.2}
          letterSpacing="0.01em"
          sx={{ mx: 3 }}
        >
          COMING SOON
        </Typography>
      </Box>
    </div>
  );
}
