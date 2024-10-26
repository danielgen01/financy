import React from "react";
import styles from "./BenefitTeaser.styles.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface BenefitTeaserProps {
  src: string | StaticImport;
  text: string;
}

export const BenefitTeaser: React.FC<BenefitTeaserProps> = ({ src, text }) => {
  return (
    <div className={styles.StyledBenefitTeaserWrapper}>
      <Image
        className={styles.StyledIcon}
        width={50}
        height={50}
        src={src}
        alt={"Benefits_teaser"}
      />
      <span className={styles.StyledText}>{text}</span>
    </div>
  );
};
