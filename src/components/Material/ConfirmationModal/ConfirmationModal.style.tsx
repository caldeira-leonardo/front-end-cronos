import styled from "@emotion/styled";
import { Box, Modal, Paper, PaperProps } from "@mui/material";
import theme from "theme";

export const MaterialModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled((props: PaperProps) => (
  <Paper {...props} elevation={3} />
))`
  max-width: 50%;
  padding: ${theme.spacing(3)};
  padding-top: ${theme.spacing(1)};
  border-radius: ${theme.spacing(1)};

  display: flex;
  flex-direction: column;

  h4 {
    padding: ${theme.spacing(3)} 0;
  }
`;

export const ButtonsContent = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 20px;
`;
