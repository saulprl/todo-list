import { ChangeEventHandler, FormEventHandler, useState } from "react";

const DUMMY_TODOS = [
  { id: 1, title: "Attend the React course", completed: true },
  { id: 2, title: "Build a ToDo-List", completed: false },
  { id: 3, title: "???", completed: false },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      setInputValue("");

      return;
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.floor(Math.random() * 1000 + prevTodos.length + 1),
          title: inputValue,
          completed: false,
        },
      ];
    });

    setInputValue("");
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
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
              required
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
                onClick={() => handleCheckedChange(todo.id)}
                className="flex items-center justify-between w-full p-2 rounded-md bg-violet-400"
              >
                <div className="flex items-center gap-2">
                  <input
                    id={`todo-${todo.id}`}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleCheckedChange.bind(null, todo.id)}
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

                    deleteTodo(todo.id);
                  }}
                  className="px-2 py-1 rounded bg-[#e91e63] text-white"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
