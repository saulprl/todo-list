import { ChangeEvent, FormEvent, useState } from "react";

const DUMMY_TODOS = [
  {
    id: 1,
    title: "Attend the React Course",
  },
  {
    id: 2,
    title: "Build a ToDo List",
  },
  {
    id: 3,
    title: "???",
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos((prevTodos) => {
      const newTodo = {
        id: Math.floor(Math.random() * 1000) + todos.length,
        title: inputValue,
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
            className="flex w-full items-center gap-2 "
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="flex-grow"
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="p-2 bg-violet-300 flex-grow h-full rounded-md">
          <ul className="list-inside list-disc">
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <span>{todo.title}</span>
                  <button
                    className="bg-[#e91e63]"
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
