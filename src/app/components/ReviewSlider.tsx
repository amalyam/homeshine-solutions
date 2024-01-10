import React, { useEffect } from "react";
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

export default function ReviewSlider() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(33, 53, 55, 0.84)",
        borderRadius: 2,
        width: "45%",
        m: 3,
        p: 2,
      }}
    >
      <Swiper
        style={{ width: "100%", height: "500px" }}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop
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
      </Swiper>
    </Box>
  );
}
