import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "theme";

export const Wrapper = styled(Box)``;

export const TextContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(3)} 0;
`;

export const Cards = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: ${theme.spacing(3)};
`;
