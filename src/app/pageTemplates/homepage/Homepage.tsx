import { OvalShapeFigure } from "@/app/components/OvalShapeBackground/OvalShapeFigure";
import H1 from "@/app/components/Typography/H1/H1";
import React from "react";
import styles from "./Homepage.styles.module.css";
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph";

const Homepage = () => {
  return (
    <>
      <OvalShapeFigure styles={styles.StyledOvalFadeShapeLeft} />
      <OvalShapeFigure styles={styles.StyledOvalFadeShapeRight} />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <H1>
          Manage your Finances <br /> with ease
        </H1>
        <Paragraph>
          Our powerful platform helps you take control of your income, expenses{" "}
          <br />
          assets, and liabilities, all in one place
        </Paragraph>
      </section>
    </>
  );
};

export default Homepage;
