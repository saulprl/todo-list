import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [inputValue, setInputValue] = useState("");

  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      console.error("Failed to fetch todos");
    }

    const data = (await response.json()) as Todo[];
    const slicedTodos = data.slice(0, 20);

    setTodos(slicedTodos);
    console.log("fetched todos");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos((prevTodos) => {
      const newTodo: Todo = {
        id: Math.floor(Math.random() * 1000) + todos.length,
        title: inputValue,
        completed: false,
        userId: 1,
      };

      return [...prevTodos, newTodo];
    });

    setInputValue("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-stretch gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="flex-grow px-2 bg-purple-300 rounded-md"
            />
            <button className="p-2 rounded font-medium bg-[#7145d6]">
              Submit
            </button>
          </form>
        </div>
        <div className="p-2 bg-violet-300 flex-grow h-full rounded-md">
          <ul className="flex flex-col gap-2">
            {todos.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className="bg-[#7145d6] p-2 rounded flex w-full gap-4 items-center"
                >
                  <span className="flex-grow">{todo.title}</span>
                  <button
                    className="bg-[#e91e63] p-2 rounded font-medium"
                    onClick={() => {
                      // logic here
                      handleDelete(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
