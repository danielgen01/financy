import { Box } from "@mui/material";
import MuiSkeleton from "../MuiSkeleton/MuiSkeleton";

export const BigCardSkeleton: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <MuiSkeleton width="40%" height={75} />
      <MuiSkeleton width="40%" height={75} />
      <MuiSkeleton
        sx={{
          marginTop: "10px",
        }}
        width={50}
        height={50}
        variant="circular"
      />
      <MuiSkeleton
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
