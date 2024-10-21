"use client";
import { OvalShapeFigure } from "@/app/components/OvalShapeBackground/OvalShapeFigure";
import React from "react";
import styles from "./Homepage.styles.module.css";
import { HeroSection, PreviewSection } from "./SubComponents";

const Homepage = () => {
  return (
    <div className={styles.StyledHomePageContentWrapper}>
      <OvalShapeFigure styles={styles.StyledOvalFadeShapeLeft} />
      <OvalShapeFigure styles={styles.StyledOvalFadeShapeRight} />
      <HeroSection />
      <PreviewSection />
    </div>
  );
};

export default Homepage;
