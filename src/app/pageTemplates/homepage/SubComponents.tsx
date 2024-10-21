"use client";
import H1 from "@/app/components/Typography/H1/H1";
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph";
import CustomButton from "@/app/components/Button/Button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./SubComponents.styles.module.css";

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

export const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
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
      <CustomButton
        onClick={() => {
          router.push("/signup");
        }}
      >
        Sign up now <ArrowSvg />
      </CustomButton>
    </section>
  );
};

export const PreviewSection: React.FC = () => {
  const theme = useTheme();

  const determineImage = () => {
    if (theme.theme === "dark") {
      return (
        <Image
          alt="preview-financy-dashboard"
          src="/Preview_dark.png"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      );
    }
    return (
      <Image
        alt="preview-financy-dashboard"
        src="/Preview_light.png"
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    );
  };
  return (
    <section className={styles.StyledPreviewSection}>
      <div className={styles.StyledImagePreviewWrapper}>{determineImage()}</div>
    </section>
  );
};
