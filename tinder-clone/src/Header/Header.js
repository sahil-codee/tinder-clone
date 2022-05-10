import { Forum, Person } from "@mui/icons-material";
import React from "react";
import "./Header.css";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
        alt="Tinder"
      />

      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
