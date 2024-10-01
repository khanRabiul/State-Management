import { useState } from "react";

function NameList() {
  const [list, setNameList] = useState(["khan", "Sajib", "Suliman"]);

  // If we change the state of a component, it re-renders
  const [names, setName] = useState("");
  
  // useState() can also take a function as an initial value. This allows the component to render at least once.
  // const [names, setName] = useState(() => "Jack");

  // setHandler does two things: it sets the value (names) and sends a re-render request. 
  // If the state is changed, the UI gets re-rendered; otherwise, it does not.
  // An interesting thing is that when a scalar data type (number, string, boolean, undefined, null) is passed and the value changes, it re-renders.
  // But for arrays and objects (which are reference types), if their value is changed using a method like `push`, it does not trigger a re-render.
  // For example, using (list.push) changes the value, but it does not re-render because of the reference data type.
  // JS compares both references and does not detect any changes as their reference remains the same. 
  // Even if we mutate or change the value of an array or object, it won't trigger a re-render.

  const addName = () => {
    // list.push(names);
    // setNameList(list);

    // Instead of giving the same array or object, we can provide a new copy of the array or object with the new value
    setNameList([...list, names]);
    // Clears the input field after adding the value
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((personName) => (
          <li key={personName}>{personName}</li>
        ))}
      </ul>
      <input
        type="text"
        value={names}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>Add Name</button>
    </div>
  );
}

// Counter App
function Counter() {
  // const [count, setCount] = useState(10);
  const [count, setCount] = useState(0);

  function addOne() {
    // setCount(count * 3);
    setCount(count + 1);
    // setCount(count - 3);
  }

  return (
    <div className="w-48 mx-auto mt-20">
      <button
        className="inline-block bg-gray-400 px-4 py-3 rounded-md"
        onClick={addOne}
      >
        Click Me: {count}
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Counter />
        <NameList />
      </div>
    </>
  );
}

export default App;
