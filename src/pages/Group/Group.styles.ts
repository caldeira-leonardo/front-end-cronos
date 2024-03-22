import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "theme";

export const Wrapper = styled(Box)`
  padding: ${theme.spacing(2)} ${theme.spacing(20)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing(10)};
`;

export const Chips = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(1)} 0;
  gap: ${theme.spacing(3)};
`;

export const ChipsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(1)} 0;
  gap: ${theme.spacing(5)};
`;
