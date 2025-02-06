import { InfinitySpin } from "react-loader-spinner";
import { Box } from "@mui/material";

// Loading Component
const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 8,
      }}
    >
      <InfinitySpin
        visible={true}
        width="200"
        color="#1a73e8"
        ariaLabel="infinity-spin-loading"
      />
    </Box>
  );
};

export default Loading;
