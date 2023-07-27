import { createSlice } from "@reduxjs/toolkit";

const countryMap = {
  IN: [22.44, 77.52],
  US: [40.47, -100.59],
  UK: [54.21, -2.08],
};

const RegionDetails = {
  IN: {
    currency: {
      code: "INR",
      symbol: "₹",
    },
    units: {
      speed: "kmph",
      distance: "kilometers",
      volume: "litres",
    },
    timezone: "IST (UTC+5:30)",
  },
  UK: {
    currency: {
      code: "GBP",
      symbol: "£",
    },
    units: {
      speed: "mph",
      distance: "miles",
      volume: "litres",
    },
    timezone: "GMT (UTC+))",
  },
  US: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    units: {
      speed: "mph",
      distance: "miles",
      volume: "gallon",
    },
    timezone: "EST (UTC-5))",
  },
};

const initialState = {
  region: "IN",
  country: [22.44, 77.52],
  regionDetails: {
    currency: {
      code: "INR",
      symbol: "₹",
    },
    units: {
      speed: "kmph",
      distance: "kilometers",
      volume: "litres",
    },
    timezone: "IST (UTC+5:30)",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateRegion: (state, action) => {
      state.region = action.payload.region;
    },
    updateLocation: (state, action) => {
      console.log(action.payload);
      state.country = countryMap[action.payload];
      state.regionDetails = RegionDetails[action.payload];
    },
  },
});

export const { updateLocation, updateRegion } = formSlice.actions;

export default formSlice.reducer;
