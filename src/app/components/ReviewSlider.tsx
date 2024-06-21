import React from "react";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
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

const BaseSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  "& .swiper-pagination-bullet": {
    // inactive bullets
    background: theme.palette.primary.main,
  },
  "& .swiper-pagination-bullet-active": {
    // active bullets
    background: theme.palette.secondary.main,
  },
}));

const VerticalSwiper = styled(BaseSwiper)(() => ({
  height: "475px",
  "--swiper-navigation-color": "transparent",
  "& .swiper-pagination": {
    bottom: "0px",
  },
}));

const HorizontalSwiper = styled(BaseSwiper)(() => ({
  height: "500px",
  "--swiper-navigation-color": "white",
  "& .swiper-slide": {
    height: "470px",
  },
}));

export default function ReviewSlider() {
  const isXs = useMediaQuery("(max-width:600px)");

  const SwiperComponent = isXs ? VerticalSwiper : HorizontalSwiper;

  const swiperRef = React.useRef<SwiperRef>(null);
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

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
        ref={swiperRef}
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
            onClick={goToNextSlide}
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
