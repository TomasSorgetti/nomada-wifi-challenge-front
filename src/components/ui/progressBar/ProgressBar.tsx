import * as React from "react";
import { Box, Progress } from "@chakra-ui/react";

export default function LinearIndeterminate({ loading }: { loading: boolean }) {
  return (
    <Box sx={{ width: "100%", height: "5px" }}>
      {loading ? (
        <Progress size="xs" isIndeterminate colorScheme="pink" />
      ) : null}
    </Box>
  );
}
