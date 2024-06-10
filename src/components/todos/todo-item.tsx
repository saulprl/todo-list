import { FC } from "react";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
  onChecked: (todoId: number) => void;
  onDeleteTodo: (todoId: number) => void;
}

export const TodoItem: FC<Props> = ({ todo, onChecked, onDeleteTodo }) => {
  return (
    <li
      onClick={() => onChecked(todo.id)}
      className="flex items-center justify-between w-full p-2 rounded-md bg-violet-400"
    >
      <div className="flex items-center gap-2">
        <input
          id={`todo-${todo.id}`}
          type="checkbox"
          checked={todo.completed}
          onChange={onChecked.bind(null, todo.id)}
          className="peer accent-[#7145d6] size-4 rounded-sm border-2 border-[#7145d6] bg-violet-200 checked:bg-[#7145d6]"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className="peer-checked:line-through peer-checked:text-gray-500 transition-colors duration-300"
        >
          {todo.title}
        </label>
      </div>
      <button
        onClick={(event) => {
          event.stopPropagation();

          onDeleteTodo(todo.id);
        }}
        className="px-2 py-1 rounded bg-[#e91e63] text-white"
      >
        Delete
      </button>
    </li>
  );
};
