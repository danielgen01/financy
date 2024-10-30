import styles from "./OvalShapeFigure.styles.module.css"

export const OvalShapeFigure = ({ styles }: { styles: string }) => {
  return <div className={styles} />
}

export const OvalShapeFigureLeft = () => {
  return <OvalShapeFigure styles={styles.StyledOvalFadeShapeLeft} />
}

export const OvalShapeFigureRight = () => {
  return <OvalShapeFigure styles={styles.StyledOvalFadeShapeRight} />
}
