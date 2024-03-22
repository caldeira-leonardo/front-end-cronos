import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import theme from "theme";

export const Wrapper = styled(Paper)`
  max-width: ${theme.spacing(50)};
  max-height: ${theme.spacing(60)};

  padding: ${theme.spacing(3)} ${theme.spacing(5)};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(3)};
  flex-direction: column;
  cursor: default;
`;

export const Content = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(3)};
`;

export const Texts = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const Tags = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
`;

export const Icons = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  svg {
    cursor: pointer;
  }
`;
