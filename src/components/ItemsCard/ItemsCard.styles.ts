import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import theme from "theme";

export const Wrapper = styled(Paper)`
  padding: ${theme.spacing(3)};
  position: relative;
`;

export const IconWrapper = styled(Box)`
  position: absolute;
  top: ${theme.spacing(-4)};
  left: ${theme.spacing(-4)};
  padding: ${theme.spacing(3)};
`;

export const DeleteIconWrapper = styled(Box)`
  position: absolute;
  top: ${theme.spacing(-2)};
  right: ${theme.spacing(-2)};
  padding: ${theme.spacing(3)};

  svg {
    cursor: pointer;
  }
`;
