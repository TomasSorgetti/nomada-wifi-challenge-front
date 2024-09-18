import { IBreweriesState } from "@/interfaces/breweries.interface";
import { getAllBreweries, getBreweriesByCountry } from "@/services/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBreweries = createAsyncThunk(
  "breweries/fetchBreweries",
  async () => {
    return await getAllBreweries();
  }
);
export const fetchCaliforniaBreweries = createAsyncThunk(
  "breweries/fetchCaliforniaBreweries",
  async () => {
    return await getBreweriesByCountry("California");
  }
);

//* Slice
const initialState: IBreweriesState = {
  breweries: [],
  filteredBreweries: [],
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

  reducers: {
    clearFilters: (state) => {
      state.filteredBreweries = [...state.breweries];
    },
    filterBreweries: (state, action) => {
      const { filter, search } = action.payload;
      state.isLoading = true;

      switch (filter) {
        case "by_name":
          state.isLoading = false;
          state.filteredBreweries = state.breweries.filter((brewery) =>
            brewery.name.toLowerCase().includes(search.toLowerCase())
          );
          break;
        case "by_city":
          state.isLoading = false;
          state.filteredBreweries = state.breweries.filter((brewery) =>
            brewery.city.toLowerCase().includes(search.toLowerCase())
          );
          break;
        case "by_country":
          state.isLoading = false;
          state.filteredBreweries = state.breweries.filter((brewery) =>
            brewery.country.toLowerCase().includes(search.toLowerCase())
          );
          break;
        case "by_state":
          state.isLoading = false;
          state.filteredBreweries = state.breweries.filter((brewery) =>
            brewery.state.toLowerCase().includes(search.toLowerCase())
          );
          break;

        default:
          state.isLoading = false;
          state.filteredBreweries = [...state.breweries];
          break;
      }
    },
  },

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
          state.filteredBreweries = newData;
        }
      })
      .addCase(fetchBreweries.rejected, (state) => {
        state.isLoading = false;
      })
      // //*   California Breweries
      // .addCase(fetchCaliforniaBreweries.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(fetchCaliforniaBreweries.fulfilled, (state, action) => {
      //   const newData = action.payload;

      //   if (
      //     JSON.stringify(state.filteredBreweries) !== JSON.stringify(newData)
      //   ) {
      //     state.isLoading = false;
      //     state.filteredBreweries = newData;
      //   }
      // })
      // .addCase(fetchCaliforniaBreweries.rejected, (state) => {
      //   state.isLoading = false;
      // });
  },
});

export const { filterBreweries, clearFilters } = BreweriesSlice.actions;

export default BreweriesSlice.reducer;
