import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate({ loading }: { loading: boolean }) {
  return (
    <Box sx={{ width: "100%", height: "5px" }}>
      {loading ? <LinearProgress color="secondary" /> : null}
    </Box>
  );
}
