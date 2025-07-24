import { Link } from "react-router-dom";
import React from "react";
import './Navbar.css';

SyntaxError: Unexpected token '.'

> 1 | import './Home.css';
      |        ^

export default function Navbar() {
  return (
    <nav className="bg-twilight text-parchment p-4 flex gap-4 font-myth">
      <Link to="/">Home</Link>
      <Link to="/feed">Feed</Link>
      <Link to="/media">Media</Link>
      <Link to="/stream">Stream</Link>
      <Link to="/profile/zeus">Profile</Link>
    </nav>
  );
}