import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import StoreProvider from "./StoreProvider";
import SessionAuthProvider from "./SessionAuthProvider";
const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StoreProvider>
      <SessionAuthProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </SessionAuthProvider>
    </StoreProvider>
  );
};

export default AppProviders;
