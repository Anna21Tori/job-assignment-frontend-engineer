import React from "react";

interface IBaseButtonProps {
  children: React.ReactNode;
  isPrimary: boolean;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}
const BaseButton = ({ children, isPrimary, onClick, className, disabled }: IBaseButtonProps) => {
  return (
    <button
      className={`btn btn-sm ${isPrimary ? "btn-outline-primary" : "btn-outline-secondary"} ${
        className ? className : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
export default BaseButton;
