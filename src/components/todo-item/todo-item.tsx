import { FC } from "react";

import { Button } from "../button/button";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
}

export const TodoItem: FC<Props> = ({ todo, onDelete }) => {
  return (
    <li
      key={todo.id}
      className="bg-[#7145d6] p-2 rounded flex w-full gap-4 items-center"
    >
      <span className="flex-grow">{todo.title}</span>
      <Button
        backgroundColor="bg-[#e91e63]"
        onClick={function click() {
          onDelete(todo.id);
        }}
      >
        Delete
      </Button>
    </li>
  );
};
