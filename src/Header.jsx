import React from 'react';
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/product/1">Product</Link>
        </li>
      </ul>

      <hr />
    </>
  )
}
