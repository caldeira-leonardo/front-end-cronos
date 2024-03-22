import styled from "@emotion/styled";
import { Modal, Paper, PaperProps } from "@mui/material";

export const MaterialModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled((props: PaperProps) => (
  <Paper {...props} elevation={3} />
))`
  padding: 20px;
  border-radius: 8px;
`;
