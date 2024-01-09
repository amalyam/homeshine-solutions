import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Button from "@mui/material/Button";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Image from "next/image";
import review1 from "/src/images/review1.jpg";
import review2 from "/src/images/review2.jpg";
import review3 from "/src/images/review3.jpg";

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

const reviews = [review1, review2, review3];

export default function ReviewSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slides: { origin: "center", spacing: 10 },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [AdaptiveHeight]
  );

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <div ref={sliderRef} className="keen-slider">
          <div
            className="keen-slider__slide number-slide1"
            style={{
              background: "rgba(33, 53, 55, 0.84)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
              color: "#fff",
              fontWeight: 500,
              height: "300px",
              maxHeight: "100vh",
            }}
          >
            1
          </div>
          <div
            className="keen-slider__slide number-slide2"
            style={{
              background: "rgba(33, 53, 55, 0.84)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
              color: "#fff",
              fontWeight: 500,
              height: "200px",
              maxHeight: "100vh",
            }}
          >
            2
          </div>
          <div
            className="keen-slider__slide number-slide3"
            style={{
              background: "rgba(33, 53, 55, 0.84)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
              color: "#fff",
              fontWeight: 500,
              height: "200px",
              maxHeight: "100vh",
            }}
          >
            3
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                left: "5px",
                fill: currentSlide === 0 ? "rgba(255, 255, 255, 0.5)" : "#fff",
              }}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                right: "5px",
                fill:
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                    ? "rgba(255, 255, 255, 0.5)"
                    : "#fff",
              }}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div
          style={{
            display: "flex",
            padding: "10px 0",
            justifyContent: "center",
          }}
        >
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                style={{
                  border: "none",
                  width: "10px",
                  height: "10px",
                  background: currentSlide === idx ? "#000" : "#c5c5c5",
                  borderRadius: "50%",
                  margin: "0 5px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
  style: React.CSSProperties;
}) {
  return (
    <svg
      onClick={props.onClick}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
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
