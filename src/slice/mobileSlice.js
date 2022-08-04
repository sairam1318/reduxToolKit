import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobiles: [
    {
      name: "Iphone",
      price: "1200$"
    }
  ],
  loading: "idle"
};

export const fetchMobiles = createAsyncThunk("mobile/addMobilesAsync", () => {
  return [
    {
      name: "MI",
      price: "40$"
    },
    {
      name: "Oppo",
      price: "50$"
    }
  ];
});

// note: reducers are list of functions that can be used to manipulate state
const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    addMobile: (state, action) => {
      state.mobiles.push(action.payload);
    }
  },
  extraReducers: {
    [fetchMobiles.pending]: (state) => {
      state.loading = "loading..";
    },
    [fetchMobiles.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = "loaded";
      state.mobiles = [state.mobiles, ...action.payload];
    },
    [fetchMobiles.rejected]: (state) => {
      state.loading = "loaded";
    }
  }
});

export const { addMobile } = mobileSlice.actions;
// here reducer nothing but slice
export default mobileSlice.reducer;
