import { useState } from "react";

import { Header } from "./components/header/header";
import { TodoForm } from "./components/todos/todo-form";
import { Todo, TodoItem } from "./components/todos/todo-item";
import { TodoList } from "./components/todos/todo-list";

const DUMMY_TODOS: Array<Todo> = [
  { id: 1, title: "Attend the React course", completed: true },
  { id: 2, title: "Build a ToDo-List", completed: false },
  { id: 3, title: "???", completed: false },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const handleSubmit = (todoTitle: string) => {
    if (!todoTitle.trim()) {
      return;
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.floor(Math.random() * 1000 + prevTodos.length + 1),
          title: todoTitle,
          completed: false,
        },
      ];
    });
  };

  const handleCheckedChange = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    });
  };

  const deleteTodo = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <main className="flex flex-col gap-2 w-full min-h-screen p-2 bg-[#7145d6]">
      <Header />
      <div className="flex flex-col flex-grow w-full h-full rounded-xl bg-violet-400 text-black">
        <div className="flex w-full gap-2 items-center p-2">
          <h2 className="text-lg font-semibold">My ToDos</h2>
          <TodoForm onFormSubmit={handleSubmit} />
        </div>
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChecked={handleCheckedChange}
              onDeleteTodo={deleteTodo}
            />
          ))}
        </TodoList>
      </div>
    </main>
  );
}

export default App;
