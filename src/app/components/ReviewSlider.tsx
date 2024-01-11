import React from "react";
import { styled, useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
import Image from "next/image";

const reviews = [
  "/images/review1.jpg",
  "/images/review2.jpg",
  "/images/review3.jpg",
  "/images/review4.jpg",
];

const VerticalSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "500px",
  "--swiper-navigation-color": "white",
  "& .swiper-button-next, & .swiper-button-prev": {
    width: "30px",
    height: "30px",
    left: "auto",
  },
  "& .swiper-button-next": {
    bottom: "10px",
    top: "495px",
    right: "50%",
    transform: "translateX(50%) rotate(90deg)",
  },
  "& .swiper-button-prev": {
    top: "20px",
    right: "50%",
    transform: "translateX(50%) rotate(90deg)",
  },
}));

const HorizontalSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "500px",
  "--swiper-navigation-color": "white",
}));

export default function ReviewSlider() {
  const theme = useTheme();
  const isXs = useMediaQuery("(max-width:600px)");

  const SwiperComponent = isXs ? VerticalSwiper : HorizontalSwiper;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(33, 53, 55, 0.84)",
        borderRadius: 2,
        width: { xs: "90%", md: "80%", lg: "65%", xl: "45%" },
        m: 3,
        p: 2,
      }}
    >
      <SwiperComponent
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop
        pagination={{ dynamicBullets: true, clickable: true }}
        navigation={{ enabled: !isXs }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src={review}
              alt={`Review ${index + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Box>
  );
}
