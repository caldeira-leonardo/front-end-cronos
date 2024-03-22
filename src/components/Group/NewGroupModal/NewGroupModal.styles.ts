import styled from "@emotion/styled";
import {
  Box,
  FormGroup as MUIFormGroup,
  Typography as MUITypography,
} from "@mui/material";
import theme from "theme";

export const Typography = styled(MUITypography)`
  font-weight: bold;
  padding-bottom: ${theme.spacing(2)};
`;

export const Form = styled.form`
  min-width: 600px;
  padding-top: ${theme.spacing(2)};
`;

export const FlexLine = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FormGroup = styled(MUIFormGroup)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: ${theme.spacing(2)} 0;
  padding-top: 4px;
`;
