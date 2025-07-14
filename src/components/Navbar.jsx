import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <Link to="/" className="navbar-brand">HotelApp</Link>
      <Link to="/rooms" className="nav-link text-white">Rooms</Link>
      <Link to="/reserve" className="nav-link text-white">Reserve</Link>
      <Link to="/list" className="nav-link text-white">Reservations</Link>
    </nav>
  );
}
