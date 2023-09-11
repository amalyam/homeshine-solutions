"use client";

import Box from "@mui/material/Box";
import MossHand from "/src/images/moss-hand-2.jpg";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";
import theme from "../theme";

export default function ComingSoon() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 84px)",
        background: `no-repeat top/cover url(${MossHand.src})`,
      }}
    >
      <Box
        sx={{
          backgroundColor: alpha(theme.palette.grey[500], 0.5),
        }}
      >
        <Typography fontSize="8rem" color="white">
          COMING SOON
        </Typography>
      </Box>
    </div>
  );
}
