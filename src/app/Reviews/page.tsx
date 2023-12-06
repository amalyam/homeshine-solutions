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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            blockSize: "fit-content",
            borderRadius: { xs: "none", sm: 2 },
            m: { md: 5, xl: 2 },
            marginLeft: { sm: "none", md: "40px" },
            backgroundColor: "rgba(33, 53, 55, 0.84)",
          }}
        >
          <Typography
            fontWeight={900}
            fontSize={38}
            margin={2}
            textAlign="center"
            color="white"
          >
            Read reviews from real HomeShine customers!
          </Typography>
          <ReviewSlider />
        </Box>
      </div>
    </Box>
  );
}
