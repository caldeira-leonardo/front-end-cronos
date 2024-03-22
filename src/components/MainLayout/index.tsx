import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import * as S from "./MainLayout.styles";

const MainLayout = () => {
  return (
    <S.Wrapper>
      <Navbar />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Wrapper>
  );
};

export default MainLayout;
