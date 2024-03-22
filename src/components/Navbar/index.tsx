import React from "react";
import * as S from "./Navbar.styles";
import logo from "assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </S.Wrapper>
  );
};

export default Navbar;
