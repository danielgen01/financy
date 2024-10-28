import React from "react";
import styles from "./BenefitTeaser.styles.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Skeleton } from "@mui/material";

interface BenefitTeaserProps {
  src: string | StaticImport;
  text: string;
}

export const BenefitTeaser: React.FC<BenefitTeaserProps> = ({ src, text }) => {
  return (
    <div className={styles.StyledBenefitTeaserWrapper}>
      {src ? (
        <Image
          className={styles.StyledIcon}
          width={50}
          height={50}
          src={src}
          alt={"Benefits_teaser"}
        />
      ) : (
        <Skeleton width={50} height={50} />
      )}
      <span className={styles.StyledText}>{text}</span>
    </div>
  );
};
