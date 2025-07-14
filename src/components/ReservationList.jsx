import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReservations,
  updateReservation,
  cancelReservation,
} from "../features/thunk";

export default function ReservationList() {
  const { reservations } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    roomId: "",
    checkIn: "",
    checkOut: "",
  });

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleEdit = (res) => {
    setEditId(res.id);
    setFormData({
      roomId: res.roomId,
      checkIn: res.checkIn,
      checkOut: res.checkOut,
    });
  };

  const handleUpdate = () => {
    dispatch(updateReservation(editId, formData));
    setEditId(null);
  };

  return (
    <div className="container">
      <h2>All Reservations</h2>
      {reservations.map((res) => (
        <div key={res.id} className="card p-3 mb-2">
          {editId === res.id ? (
            <>
              <input
                value={formData.roomId}
                onChange={(e) =>
                  setFormData({ ...formData, roomId: e.target.value })
                }
              />
              <input
                type="date"
                value={formData.checkIn}
                onChange={(e) =>
                  setFormData({ ...formData, checkIn: e.target.value })
                }
              />
              <input
                type="date"
                value={formData.checkOut}
                onChange={(e) =>
                  setFormData({ ...formData, checkOut: e.target.value })
                }
              />
              <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>
                Save
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setEditId(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>
                <strong>Room ID:</strong> {res.roomId} | <strong>Check-in:</strong>{" "}
                {res.checkIn} | <strong>Check-out:</strong> {res.checkOut}
              </p>
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => handleEdit(res)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(cancelReservation(res.id))}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
