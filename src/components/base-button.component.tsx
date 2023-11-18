import React from "react";

interface IBaseButtonProps {
  children: React.ReactNode;
  isPrimary: boolean;
  onClick: () => void;
}
const BaseButton = ({ children, isPrimary, onClick }: IBaseButtonProps) => {
  return (
    <button className={`btn btn-sm ${isPrimary ? "btn-outline-primary" : "btn-outline-secondary"}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default BaseButton;
