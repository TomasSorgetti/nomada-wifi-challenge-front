import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { BreweriesSlice } from "./features/Breweries/BreweriesSlice";
import { AuthSlice } from "./features/auth/authSlice";

const rootReducer = combineSlices(BreweriesSlice, AuthSlice);
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
