"use client";

import ComingSoon from "../components/ComingSoon";
import Box from "@mui/material/Box";
import ReviewSlider from "../components/ReviewSlider";
import Siding from "/src/images/Soft_Wash_Siding.png";
import Typography from "@mui/material/Typography";

export default function Reviews() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: `no-repeat center/cover url(${Siding.src})`,
        minHeight: "100vh",
        minWidth: "100vw",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
        backgroundPosition: "top",
      }}
    >
      <ReviewSlider />
    </Box>
  );
}
