import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as S from "./Modal.style";

const Modal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <S.MaterialModal open={open} onClose={handleClose}>
        <S.ModalWrapper>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </S.ModalWrapper>
      </S.MaterialModal>
    </div>
  );
};

export default Modal;
