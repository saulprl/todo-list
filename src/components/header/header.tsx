import { FC } from "react";

interface Props {
  title?: string;
}

export const Header: FC<Props> = ({ title = "Saul's ToDo-List" }) => {
  return (
    <header className="w-full">
      <h1 className="font-bold text-2xl text-center">{title}</h1>
    </header>
  );
};
