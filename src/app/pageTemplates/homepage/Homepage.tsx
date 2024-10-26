"use client";
import {
  OvalShapeFigureLeft,
  OvalShapeFigureRight,
} from "@/app/components/OvalShapeFigure/OvalShapeFigure";
import React from "react";
import styles from "./Homepage.styles.module.css";
import { BenefitSection, HeroSection, PreviewSection } from "./SubComponents";
import { H2 } from "@/app/components/Typography/H2/H2";
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph";

const Homepage = () => {
  return (
    <div className={styles.StyledHomePageContentWrapper}>
      <HeroSection />
      <PreviewSection />
      <BenefitSection />
    </div>
  );
};

export default Homepage;
