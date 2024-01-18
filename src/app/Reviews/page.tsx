"use client";

import Box from "@mui/material/Box";
import ReviewSlider from "../components/ReviewSlider";
import SunsetGutter from "/public/images/sunset_gutter.jpeg";
import Typography from "@mui/material/Typography";

export default function Reviews() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: `no-repeat center/cover url(${SunsetGutter.src})`,
        backgroundSize: "cover",
        minHeight: "100% 100%",
        minWidth: "100vw",
        alignItems: "center",
        zIndex: "1000",
        flexGrow: "1",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(33, 53, 55, 0.84)",
          borderRadius: 2,
          maxWidth: "max-content",
          m: 3,
          p: 2,
        }}
      >
        <Typography
          fontSize="2rem"
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
          Read reviews from HomeShine customers!
        </Typography>
      </Box>
      <ReviewSlider />
    </Box>
  );
}
