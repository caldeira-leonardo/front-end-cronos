import Modal from "components/Material/Modal";
import React from "react";

interface IGroupProps {
  children?: React.ReactNode;
}

const Group = ({ children }: IGroupProps) => {
  return (
    <div>
      <Modal />
    </div>
  );
};

export default Group;
