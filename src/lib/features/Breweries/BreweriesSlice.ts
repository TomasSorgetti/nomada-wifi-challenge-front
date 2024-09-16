import { getAllBreweries, getBreweriesByCountry } from "@/services/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IBrewery {
  id: string;
  name: string;
  address_1: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  website_url: string;
  longitude: string;
  latitude: string;
  street: string;
}
export interface IBreweriesState {
  breweries: IBrewery[];
  californiaBreweries: IBrewery[];
  brewery: IBrewery;
  isLoading: boolean;
}

export const fetchBreweries = createAsyncThunk(
  "breweries/fetchBreweries",
  async () => {
    return await getAllBreweries();
  }
);
export const fetchCaliforniaBreweries = createAsyncThunk(
  "breweries/fetchCaliforniaBreweries",
  async () => {
    return await getBreweriesByCountry("california");
  }
);

//* Slice
const initialState: IBreweriesState = {
  breweries: [],
  californiaBreweries: [],
  brewery: {
    id: "",
    name: "",
    address_1: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    website_url: "",
    longitude: "",
    latitude: "",
    street: "",
  },
  isLoading: false,
};

export const BreweriesSlice = createSlice({
  name: "breweries",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      //*   All Breweries
      .addCase(fetchBreweries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBreweries.fulfilled, (state, action) => {
        const newData = action.payload;

        if (JSON.stringify(state.breweries) !== JSON.stringify(newData)) {
          state.isLoading = false;
          state.breweries = newData;
        }
      })
      .addCase(fetchBreweries.rejected, (state) => {
        state.isLoading = false;
      })
      //*   California Breweries
      .addCase(fetchCaliforniaBreweries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCaliforniaBreweries.fulfilled, (state, action) => {
        const newData = action.payload;

        if (
          JSON.stringify(state.californiaBreweries) !== JSON.stringify(newData)
        ) {
          state.isLoading = false;
          state.californiaBreweries = newData;
        }
      })
      .addCase(fetchCaliforniaBreweries.rejected, (state) => {
        state.isLoading = false;
      });
    //*   Brewery
  },
});

export const {} = BreweriesSlice.actions;

export default BreweriesSlice.reducer;
