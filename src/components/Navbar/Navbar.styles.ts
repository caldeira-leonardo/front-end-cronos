import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "theme";

export const Wrapper = styled(Box)`
  width: 100%;
  height: ${theme.spacing(10)};
  padding: ${theme.spacing(3)} ${theme.spacing(10)};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    left: ${theme.spacing(10)};
    cursor: pointer;
  }
`;

export const PageLinks = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: ${theme.spacing(10)};
`;
