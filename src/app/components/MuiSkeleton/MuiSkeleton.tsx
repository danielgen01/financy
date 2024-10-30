import type { SkeletonProps } from "@mui/material"
import { Skeleton } from "@mui/material"
import React from "react"

import styles from "./MuiSkeleton.styles.module.css"

export const MuiSkeleton: React.FC<SkeletonProps> = ({
  className,
  width,
  variant,
  height,
  color,
  ...rest
}) => {
  return (
    <Skeleton
      className={styles.StyledDarkSkeleton}
      width={width}
      height={height}
      variant={variant}
      {...rest}
    />
  )
}

export default MuiSkeleton
