import React from "react";

interface IItemProps {
  children?: React.ReactNode;
}

const Item = ({ children }: IItemProps) => {
  return <div>Item</div>;
};

export default Item;
