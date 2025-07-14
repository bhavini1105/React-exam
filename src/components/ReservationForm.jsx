// components/ReservationForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeReservation } from "../redux/thunks";

export default function ReservationForm() {
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeReservation({ roomId, checkIn, checkOut }));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Make a Reservation</h3>
      <input placeholder="Room ID" onChange={(e) => setRoomId(e.target.value)} />
      <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
      <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
      <button className="btn btn-success mt-2">Reserve</button>
    </form>
  );
}
