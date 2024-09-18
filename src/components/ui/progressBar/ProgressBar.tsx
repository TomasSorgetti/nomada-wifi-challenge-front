import * as React from "react";
import Box from "@mui/material/Box";
import { Progress } from "@chakra-ui/react";

export default function LinearIndeterminate({ loading }: { loading: boolean }) {
  return (
    <Box sx={{ width: "100%", height: "5px" }}>
      {loading ? <Progress size="xs" isIndeterminate /> : null}
    </Box>
  );
}
