import { ChangeEventHandler, FormEventHandler, useState } from "react";

const DUMMY_TODOS = [
  { id: 1, title: "Attend the React course" },
  { id: 2, title: "Build a ToDo-List" },
  { id: 3, title: "???" },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random() * 1000 + prevTodos.length + 1, title: inputValue },
      ];
    });

    setInputValue("");
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const deleteTodo = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <main className="flex flex-col gap-2 w-full min-h-screen p-2 bg-[#7145d6]">
      <header className="w-full">
        <h1 className="font-bold text-2xl text-center">
          Saúl&apos;s ToDo-List
        </h1>
      </header>
      <div className="flex flex-col flex-grow w-full h-full rounded-xl bg-violet-400 text-black">
        <div className="flex w-full gap-2 items-center p-2">
          <h2 className="text-lg font-semibold">My ToDos</h2>
          <form
            onSubmit={handleSubmit}
            className="flex items-center flex-grow gap-2"
          >
            <input
              type="text"
              placeholder="Write a ToDo!"
              value={inputValue}
              onChange={handleInputChange}
              className="bg-violet-300 rounded-md text-black placeholder-violet-700/50 p-2 flex-grow"
            />
            <button className="p-2 bg-[#7145d6] text-white rounded-md hover:bg-violet-700 transition-colors duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="flex w-full h-full flex-grow flex-col rounded-xl p-2 bg-violet-200">
          <ul className="flex flex-col gap-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                onClick={deleteTodo.bind(null, todo.id)}
                className="w-full p-2 rounded-md bg-violet-400"
              >
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
