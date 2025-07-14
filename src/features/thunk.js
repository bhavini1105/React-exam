// redux/thunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3001";


export const fetchRooms = createAsyncThunk("hotel/fetchRooms", async () => {
  const res = await axios.get(`${API}/rooms`);
  return res.data;
});


export const fetchReservations = createAsyncThunk(
  "hotel/fetchReservations",
  async () => {
    const res = await axios.get(`${API}/reservations`);
    return res.data;
  }
);


export const makeReservation = createAsyncThunk(
  "hotel/makeReservation",
  async (data, { dispatch }) => {
    await axios.post(`${API}/reservations`, data);
    const res = await axios.get(`${API}/reservations`);
    return res.data;
  }
);


export const updateReservation = createAsyncThunk(
  "hotel/updateReservation",
  async ({ id, data }, { dispatch }) => {
    await axios.put(`${API}/reservations/${id}`, data);
    const res = await axios.get(`${API}/reservations`);
    return res.data;
  }
);


export const cancelReservation = createAsyncThunk(
  "hotel/cancelReservation",
  async (id, { dispatch }) => {
    await axios.delete(`${API}/reservations/${id}`);
    const res = await axios.get(`${API}/reservations`);
    return res.data;
  }
);
