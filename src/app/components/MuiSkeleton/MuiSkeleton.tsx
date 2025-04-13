import type { SkeletonProps } from "@mui/material"
import { Skeleton } from "@mui/material"
import React from "react"

import styles from "./MuiSkeleton.styles.module.css"

export const MuiSkeleton: React.FC<SkeletonProps> = ({
  width,
  variant,
  height,
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
