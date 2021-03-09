import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className=".navbar">
    <NavLink>Home</NavLink>
    <NavLink>Actors</NavLink>
    </div>
  );
};

export default NavBar;
