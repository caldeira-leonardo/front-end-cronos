import React from "react";
import * as S from "./Home.style";

interface IHomeProps {
  children?: React.ReactNode;
}

const Home = ({ children }: IHomeProps) => {
  return <S.Wrapper>Home</S.Wrapper>;
};

export default Home;
