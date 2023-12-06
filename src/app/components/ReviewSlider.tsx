import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Box from "@mui/material/Box";
import Image from "next/image";
import review1 from "/src/images/review1.jpg";
import review2 from "/src/images/review2.jpg";
import review3 from "/src/images/review3.jpg";
import styles from "../styles.module.css";
import "keen-slider/keen-slider.min.css";

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? styles["arrow--disabled"] : "";
  return (
    <svg
      onClick={props.onClick}
      className={`${styles["arrow"]} ${
        props.left ? styles["arrow--left"] : styles["arrow--right"]
      } ${disabeld}`}
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

export default function ReviewSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Box sx={{ m: 8 }}>
      <div className={styles["navigation-wrapper"]}>
        <div ref={sliderRef} className={styles["keen-slider"]}>
          <div className={`${styles["keen-slider__slide"]} ${styles.slide}`}>
            <Image src={review1} alt="review 1" width={500} />
          </div>
          <div className={`${styles["keen-slider__slide"]} ${styles.slide}`}>
            <Image src={review2} alt="review 2" width={400} />
          </div>
          <div className={`${styles["keen-slider__slide"]} ${styles.slide}`}>
            <Image src={review3} alt="review 3" width={500} />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                (instanceRef.current?.track?.details?.slides?.length ?? 0) - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className={styles["dots"]}>
          {[
            ...Array(
              instanceRef.current?.track?.details?.slides?.length ?? 0
            ).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`${styles["dot"]} ${
                  currentSlide === idx ? styles["active"] : ""
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </Box>
  );
}
