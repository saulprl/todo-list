import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
}

export const Button: FC<Props> = ({
  children,
  backgroundColor = "bg-[#7145d6]",
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`px-2 py-1 rounded font-medium ${backgroundColor}`}
    >
      {children}
    </button>
  );
};
