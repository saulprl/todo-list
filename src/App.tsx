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
    <main>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button>Submit</button>
      </form>
      <h2>My ToDos</h2>
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
    </main>
  );
}

export default App;
