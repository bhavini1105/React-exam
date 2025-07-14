import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoomList from "./components/RoomList";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/list" element={<ReservationList />} />
      </Routes>
    </>
  );
}

export default App;
