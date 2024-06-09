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
      return [...prevTodos, { id: prevTodos.length + 1, title: inputValue }];
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
    <main>
      <h1>Saul&apos;s ToDo-List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a ToDo!"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
      <h2>My ToDos</h2>
      <ul className="list-inside list-disc">
        {todos.map((todo) => (
          <li key={todo.id} onClick={deleteTodo.bind(null, todo.id)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
