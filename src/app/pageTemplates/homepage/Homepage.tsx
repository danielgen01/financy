"use client";
import { OvalShapeFigure } from "@/app/components/OvalShapeBackground/OvalShapeFigure";
import H1 from "@/app/components/Typography/H1/H1";
import React from "react";
import styles from "./Homepage.styles.module.css";
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph";
import Button from "@/app/components/Button/Button";

const ArrowSvg = () => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      class="bi bi-arrow-right-short"
      stroke="white"
    >
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
      />
    </svg>
  );
};

const Homepage = () => {
  return (
    <>
      <OvalShapeFigure styles={styles.StyledOvalFadeShapeLeft} />
      <OvalShapeFigure styles={styles.StyledOvalFadeShapeRight} />
      <section className={styles.StyledHeroSection}>
        <H1>
          Manage your{" "}
          <span className={styles.StyledHighlightedSpan}>Finances</span> <br />{" "}
          with ease
        </H1>
        <Paragraph>
          Our powerful platform helps you take control of your income, expenses{" "}
          <br />
          assets, and liabilities, all in one place
        </Paragraph>
        <Button
          onClick={() => {
            alert("Hi");
          }}
        >
          Sign up now <ArrowSvg />
        </Button>
      </section>
    </>
  );
};

export default Homepage;
