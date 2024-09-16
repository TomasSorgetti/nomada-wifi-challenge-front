import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import StoreProvider from "./StoreProvider";
const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </StoreProvider>
  );
};

export default AppProviders;
