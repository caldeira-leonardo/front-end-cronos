import React from "react";
import * as S from "./Navbar.styles";
import { Button } from "@mui/material";
import logo from "assets/logo.svg";
import { headerOptions } from "utils/mocked";

interface INavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: INavbarProps) => {
  return (
    <S.Wrapper>
      <img src={logo} alt="logo" />

      <S.PageLinks>
        {headerOptions.map((link) => (
          <Button key={link.key}>{link.label}</Button>
        ))}
      </S.PageLinks>
    </S.Wrapper>
  );
};

export default Navbar;
