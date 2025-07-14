import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../features/thunk";

export default function RoomList() {
  const dispatch = useDispatch();
  const { hotelroom, loading } = useSelector((state) => state.hotel);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Available Rooms</h2>
      {loading ? <p>Loading...</p> : hotelroom.map((room) => (
        <div key={room.id} className="card p-2 mb-2">
          <p><strong>Type:</strong> {room.type}</p>
          <p><strong>Features:</strong> {room.features}</p>
        </div>
      ))}
    </div>
  );
}
