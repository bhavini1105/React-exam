
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRooms,
  fetchReservations,
  makeReservation,
  updateReservation,
  cancelReservation,
} from "./thunk";

const initialState = {
  hotelroom: [],
  reservations: [],
  loading: false,
  error: false,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.hotelroom = action.payload;
      })
      .addCase(fetchRooms.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
      })

      
      .addCase(makeReservation.fulfilled, (state, action) => {
        state.reservations = action.payload;
      })
      .addCase(updateReservation.fulfilled, (state, action) => {
        state.reservations = action.payload;
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.reservations = action.payload;
      });
  },
});

export default hotelSlice.reducer;
