import { Box, Skeleton } from "@mui/material";

export const BigCardSkeleton: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Skeleton width="40%" height={75} />
      <Skeleton width="40%" height={75} />
      <Skeleton
        sx={{
          marginTop: "10px",
        }}
        width={50}
        height={50}
        variant="circular"
      />
      <Skeleton
        sx={{
          marginTop: "10px",
        }}
        width={50}
        height={50}
        variant="circular"
      />
    </Box>
  );
};
