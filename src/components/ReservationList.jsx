import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReservations,
  updateReservation,
  cancelReservation,
} from "../features/thunk";

function ReservationList() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.hotel?.reservations || []);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
  });

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleEditClick = (res) => {
    setEditId(res.id);
    setEditData({
      name: res.name,
      roomType: res.roomType,
      checkIn: res.checkIn,
      checkOut: res.checkOut,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateReservation(editId, editData));
    setEditId(null);
  };


  const handleDelete = (id) => {
    dispatch(cancelReservation(id));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2 className="mb-4">Reservation List</h2>

      {reservations.length === 0 && <p>No reservations found.</p>}

      {reservations.map((res) => (
        <div
          key={res.id}
          className="card p-4 mb-3 shadow-sm"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          {editId === res.id ? (
            <form onSubmit={handleUpdate}>
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Room Type</label>
                <input
                  name="roomType"
                  value={editData.roomType}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Check-In</label>
                <input
                  type="date"
                  name="checkIn"
                  value={editData.checkIn}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Check-Out</label>
                <input
                  type="date"
                  name="checkOut"
                  value={editData.checkOut}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-success btn-sm" type="submit">
                  Save
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setEditId(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <p>
                <strong>Name:</strong> {res.name}
              </p>
              <p>
                <strong>Room:</strong> {res.roomType}
              </p>
              <p>
                <strong>Check-In:</strong> {res.checkIn}
              </p>
              <p>
                <strong>Check-Out:</strong> {res.checkOut}
              </p>
              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleEditClick(res)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(res.id)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReservationList;
