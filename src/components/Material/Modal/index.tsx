import * as React from "react";
import * as S from "./Modal.style";

interface IModalProps {
  isOpen: boolean;
  handleClose(): void;
  children: React.ReactNode;
}

const Modal = ({ children, handleClose, isOpen }: IModalProps) => {
  return (
    <div>
      <S.MaterialModal open={isOpen} onClose={handleClose}>
        <S.ModalWrapper>{children}</S.ModalWrapper>
      </S.MaterialModal>
    </div>
  );
};

export default Modal;
