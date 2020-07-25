import React, { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);

  const IncrementTen = () => setCount(count + 10);
  const DecrementTen = () => setCount(count - 10);

  return (
    <div className="App">
      <header>
        <h1>Incrementor</h1>
      </header>
      <div className="count-container">
        <p className="count">{count}</p>
      </div>
      <div className="button-container">
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Increment}>Increment</button>
      </div>
      <div className="button-container">
        <button onClick={DecrementTen}>Decrement by Ten</button>
        <button onClick={IncrementTen}>Increment by Ten</button>
      </div>
    </div>
  );
}

export default App;
