import { Box } from "@mui/material"

import { MuiSkeleton } from "../MuiSkeleton/MuiSkeleton"
import styles from "./ListItem.styles.module.css"

const CircularSkeletonActionIcon: React.FC = () => {
  return <MuiSkeleton width={50} height={50} variant="circular" />
}

export const BigCardSkeleton: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <MuiSkeleton width="30%" height={75} />
      <MuiSkeleton width="30%" height={75} />
      <div className={styles.StyledSkeletonActionIconsWrapper}>
        <CircularSkeletonActionIcon />
        <CircularSkeletonActionIcon />
      </div>
    </Box>
  )
}
