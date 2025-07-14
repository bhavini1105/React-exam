import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeReservation } from "../features/thunk";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeReservation(form));
    setForm({ name: "", roomType: "", checkIn: "", checkOut: "" });
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <div className="card p-4 shadow">
        <h3 className="mb-4 text-center">Make a Reservation</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Room Type</label>
            <select
              className="form-select"
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              required
            >
              <option value="">Select Room Type</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Standard">Standard</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Check-In Date</label>
            <input
              type="date"
              className="form-control"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Check-Out Date</label>
            <input
              type="date"
              className="form-control"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
}
