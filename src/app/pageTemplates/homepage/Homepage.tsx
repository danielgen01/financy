"use client";
import {
  OvalShapeFigureLeft,
  OvalShapeFigureRight,
} from "@/app/components/OvalShapeFigure/OvalShapeFigure";
import React from "react";
import styles from "./Homepage.styles.module.css";
import { HeroSection, PreviewSection } from "./SubComponents";

const Homepage = () => {
  return (
    <div className={styles.StyledHomePageContentWrapper}>
      <HeroSection />
      <PreviewSection />
    </div>
  );
};

export default Homepage;
