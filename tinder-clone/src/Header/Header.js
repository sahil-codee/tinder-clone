import { ArrowBackIos, Forum, Person } from "@mui/icons-material";
import React from "react";
import "./Header.css";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
        <ArrowBackIos fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <Person fontSize="large" className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
          alt="Tinder"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
