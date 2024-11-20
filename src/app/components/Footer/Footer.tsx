import React from "react"
import styles from "./Footer.styles.module.css"
import LogoDark from "../../../../public/Logo-dark.png"
import Image from "next/image"

export const Footer = () => {
  return (
    <div className={styles.StyledFooter}>
      <div className={styles.StyledFooterContent}>
        <Image src={LogoDark} alt="Logo" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsum
          at dolorem delectus amet debitis laborum aperiam, cumque, repudiandae
          dignissimos aspernatur ea exercitationem vero a est. Sapiente qui
          expedita optio!
        </span>
      </div>
    </div>
  )
}
