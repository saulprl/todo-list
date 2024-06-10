import { FC } from "react";
import { TodoItem } from "./todo-item";

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
          <TodoItem
            key={todo.id}
            todo={todo}
            onChecked={onCheckedChange}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
