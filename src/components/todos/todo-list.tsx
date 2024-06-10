import { FC } from "react";

interface Props {
  todos: { id: number; title: string; completed: boolean }[];
  onCheckedChange: (todoId: number) => void;
  onDeleteTodo: (todoId: number) => void;
}

export const TodoList: FC<Props> = ({
  todos,
  onCheckedChange,
  onDeleteTodo,
}) => {
  return (
    <div className="flex w-full h-full flex-grow flex-col rounded-xl p-2 bg-violet-200">
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => onCheckedChange(todo.id)}
            className="flex items-center justify-between w-full p-2 rounded-md bg-violet-400"
          >
            <div className="flex items-center gap-2">
              <input
                id={`todo-${todo.id}`}
                type="checkbox"
                checked={todo.completed}
                onChange={onCheckedChange.bind(null, todo.id)}
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
        ))}
      </ul>
    </div>
  );
};
