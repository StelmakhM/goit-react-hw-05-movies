import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/movies">MOVIES</Link>
      </nav>
      <Outlet />
    </div>
  );
}
