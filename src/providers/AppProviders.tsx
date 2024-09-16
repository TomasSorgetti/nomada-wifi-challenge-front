import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import StoreProvider from "./StoreProvider";
import SessionAuthProvider from "./SessionAuthProvider";
const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StoreProvider>
      <SessionAuthProvider>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </SessionAuthProvider>
    </StoreProvider>
  );
};

export default AppProviders;
