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
    <Routes>
      <Navbar />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/reserve" element={<ReservationForm /> }/>
        <Route path="/list" element={<ReservationList />} />
        <Route path="/" element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
