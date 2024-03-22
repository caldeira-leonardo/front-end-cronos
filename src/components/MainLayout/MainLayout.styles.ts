import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "theme";

export const Wrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.palette.gradient.start};
`;

export const Content = styled(Box)`
  height: calc(100vh - ${theme.spacing(10)});

  padding: 0 ${theme.spacing(10)};
`;
