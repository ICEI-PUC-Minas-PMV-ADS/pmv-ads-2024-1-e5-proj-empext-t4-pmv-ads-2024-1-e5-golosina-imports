"use client";
import React from "react";
import { useState } from "react";
import { useWindowSize } from "react-use";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

type CarouselProps = {
  items: React.ReactNode[];
};

export const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();

  const numItemsToShow = () => {
    if (width <= 768) {
      return 1;
    } else if (width <= 1024) {
      return 2;
    } else {
      return 3;
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const itemsToShow = numItemsToShow();

  return (
    <div className={styles.carousel}>
      <button
        className={styles.carousel__button}
        onClick={goToPrevious}
        aria-label="anterior"
      >
        <ArrowLeft size={32} />
      </button>
      <div className={styles.carousel__content}>
        {items
          .slice(currentIndex, currentIndex + itemsToShow)
          .map((item, index) => (
            <div key={index}>{item}</div>
          ))}
      </div>
      <button
        className={styles.carousel__button}
        onClick={goToNext}
        aria-label="próximo"
      >
        <ArrowRight size={32} />
      </button>
    </div>
  );
};
