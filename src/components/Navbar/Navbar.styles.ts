import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "theme";

export const Wrapper = styled(Box)`
  width: 100%;
  height: ${theme.spacing(10)};
  padding: ${theme.spacing(3)} ${theme.spacing(10)};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: ${theme.palette.gradient.middle};

  a {
    img {
      cursor: pointer;
    }
  }
`;

export const PageLinks = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: ${theme.spacing(10)};
`;
