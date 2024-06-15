import { FormEvent, useEffect, useState } from "react";

import { Todo, TodoItem } from "./components/todo-item/todo-item";
import { TodoForm } from "./components/todo-form/todo-form";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      console.error("Failed to fetch todos");
    }

    const data = (await response.json()) as Todo[];
    const slicedTodos = data.slice(0, 20);

    setTodos(slicedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = (todoTitle: string) => {
    setTodos((prevTodos) => {
      const newTodo: Todo = {
        id: Math.floor(Math.random() * 1000) + todos.length,
        title: todoTitle,
        completed: false,
        userId: 1,
      };

      return [newTodo, ...prevTodos];
    });
  };

  const handleDelete = (deletedId: number) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== deletedId);
    });
  };

  return (
    <main className="flex w-full h-screen max-h-screen bg-[#7145d6] flex-col p-2 gap-2">
      <h1 className="text-2xl font-semibold text-center">ToDo List</h1>
      <div className="rounded-md bg-violet-400">
        <div className="flex w-full items-center gap-4 p-2">
          <h2 className="text-xl font-medium whitespace-nowrap">My ToDos</h2>
          <TodoForm onSubmit={handleSubmit} />
        </div>
        <div className="p-2 bg-violet-300 flex-grow h-full rounded-md">
          <ul className="flex flex-col gap-2">
            {todos.map((todo) => {
              return (
                <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
