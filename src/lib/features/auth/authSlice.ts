import { loginService } from "@/services/auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async ({
    email,
    password,
    persist,
  }: {
    email: string;
    password: string;
    persist?: boolean;
  }) => {
    return await loginService({
      email,
      password,
      persist,
    });
  }
);

export interface IUser {
  id: number;
  email: string;
  roles: {
    id: number;
    name: string;
  };
}

export interface IAuthState {
  user: IUser | null;
  accessToken: string;
  isLoading: boolean;
}

//* Slice
const initialState: IAuthState = {
  user: null,
  accessToken: "",
  isLoading: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout(state) {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        const newData = action.payload;
        console.log("REDUCER", newData);

        if (JSON.stringify(state.user) !== JSON.stringify(newData)) {
          state.isLoading = false;
          state.accessToken = newData.accessToken;
          state.user = newData.user;
        }
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
