import React, { useEffect, useState } from "react";
import { MobileStepper, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useKeenSlider } from "keen-slider/react";
import Box from "@mui/material/Box";
import Image from "next/image";
import review1 from "/src/images/review1.jpg";
import review2 from "/src/images/review2.jpg";
import review3 from "/src/images/review3.jpg";
import styles from "../styles.module.css";
import "keen-slider/keen-slider.min.css";

const reviews = [review1, review2, review3];

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
          width: "60vw",
          height: "80vh",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
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
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0 ,0 ,0, 0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            onClick={handleBack}
          >
            <ArrowBackIos />
          </Button>
          <Button
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0 ,0 ,0, 0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            onClick={handleNext}
          >
            <ArrowForwardIos />
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
