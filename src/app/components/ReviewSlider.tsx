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

/*
export default function ReviewSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % reviews.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep + reviews.length - 1) % reviews.length
    );
  };

  const handleImageLoad = (event: React.SyntheticEvent) => {
    const img = event.target as HTMLImageElement;
    const width = img.naturalWidth;
    const height = img.naturalHeight;
    const aspectRatio = width / height;
    const maxHeight = 600;

    if (height > maxHeight) {
      setImageHeight(maxHeight);
      setImageWidth(maxHeight * aspectRatio);
    } else {
      setImageHeight(height);
      setImageWidth(width);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "50vw",
          height: "70vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(33, 53, 55, 0.84)",
            borderRadius: 2,
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={reviews[activeStep]}
            alt={`review ${activeStep + 1}`}
            width={imageWidth}
            height={imageHeight}
            onLoad={handleImageLoad}
          />
          <Button
            sx={{
              position: "absolute",
              top: { xs: "15px", sm: "50%" },
              left: { xs: "50%", sm: "15px" },
              transform: { xs: "translateX(-50%)", sm: "none" },
              backgroundColor: "rgba(0 ,0 ,0, 0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            onClick={handleBack}
          >
            <ArrowBackIos
              sx={{ transform: { xs: "rotate(90deg)", sm: "none" } }}
            />
          </Button>
          <Button
            sx={{
              position: "absolute",
              top: { xs: "auto", sm: "50%" },
              bottom: { xs: "15px", sm: "auto" },
              right: { xs: "50%", sm: "15px" },
              transform: { xs: "translateX(50%)", sm: "none" },
              backgroundColor: "rgba(0 ,0 ,0, 0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            onClick={handleNext}
          >
            <ArrowForwardIos
              sx={{ transform: { xs: "rotate(90deg)", sm: "none" } }}
            />
          </Button>
        </Box>
      </Box>
      <div style={{ display: "none" }}>
        {reviews.map((review, index) => (
          <img key={index} src={review.src} alt={`review ${index + 1}`} />
        ))}
      </div>
    </>
  );
}
*/
