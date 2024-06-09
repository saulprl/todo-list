function App() {
  return (
    <main>
      <h1>Saul&apos;s ToDo-List</h1>
      <form>
        <input type="text" placeholder="Write a ToDo!" />
        <button>Submit</button>
      </form>
      <h2>My ToDos</h2>
      <ul className="list-inside list-disc">
        <li>Attend the React course</li>
        <li>Build a ToDo-List</li>
        <li>???</li>
        <li>Profit!</li>
      </ul>
    </main>
  );
}

export default App;
