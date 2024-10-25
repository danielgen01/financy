"use client";
import {
  OvalShapeFigureLeft,
  OvalShapeFigureRight,
} from "@/app/components/OvalShapeFigure/OvalShapeFigure";
import React from "react";
import styles from "./Homepage.styles.module.css";
import { HeroSection, PreviewSection } from "./SubComponents";

const BenefitSection = () => {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ fontSize: "40px" }}>Why choose financy ? </h2>
    </section>
  );
};

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
