// src/components/NavBar.js
import MenuItem from '@material-ui/core/MenuItem'
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <MenuItem onClick={() => loginWithRedirect({})} style={{textDecoration: "none", color: "white"}}>Log in</MenuItem>
      )}

      {isAuthenticated && <MenuItem onClick={() => logout()} style={{textDecoration: "none", color: "white"}}>Log out</MenuItem>}
      <span>
        <MenuItem><Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link></MenuItem>
        <MenuItem><Link to="/characters" style={{textDecoration: "none", color: "white"}}>Characters</Link></MenuItem>
        <MenuItem><Link to="/profile" style={{textDecoration: "none", color: "white"}}>Profile</Link></MenuItem>
      </span>
    </div>
  );
};

export default NavBar;