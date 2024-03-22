import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as S from "./Modal.style";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <S.MaterialModal open={open} onClose={handleClose}>
        <S.ModalWrapper>{children}</S.ModalWrapper>
      </S.MaterialModal>
    </div>
  );
};

export default Modal;
