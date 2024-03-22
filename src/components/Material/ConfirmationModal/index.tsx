import * as React from "react";
import Button from "@mui/material/Button";
import * as S from "./ConfirmationModal.style";
import { Divider, Typography } from "@mui/material";

interface IItemsCardProps {
  isOpen: boolean;
  handleClose(): void;
  handleConfirm(): void;
  confirmationText: string;
  headerText: string;
}

const ConfirmationModal = ({
  handleClose,
  handleConfirm,
  isOpen,
  confirmationText,
  headerText,
}: IItemsCardProps) => {
  return (
    <S.MaterialModal open={isOpen} onClose={handleClose}>
      <S.ModalWrapper>
        <Typography variant="overline" fontSize={20}>
          {headerText}
        </Typography>
        <Divider />
        <Typography variant="h4" textAlign="center">
          {confirmationText}
        </Typography>
        <S.ButtonsContent>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button onClick={handleConfirm}>Confirmar</Button>
        </S.ButtonsContent>
      </S.ModalWrapper>
    </S.MaterialModal>
  );
};

export default ConfirmationModal;
