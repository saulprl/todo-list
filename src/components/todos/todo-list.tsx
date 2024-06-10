import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TodoList: FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full h-full flex-grow flex-col rounded-xl p-2 bg-violet-200">
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
};
