import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function hadleOnClickInD() {
    setCount((prev) => prev + 1);
  }

  function hadleOnClickDnD() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="border-2 w-1/2 flex-col items-center justify-center p-6 space-y-10">
        <h1 className="text-5xl flex justify-center">Counter</h1>
        <dir className="flex justify-between">
          <button
            className="text-3xl border-2 p-2 w-24"
            onClick={hadleOnClickDnD}
          >
            -
          </button>
          <p className="text-6xl">{count}</p>

          <button
            className="text-3xl border-2 p-2 w-24"
            onClick={hadleOnClickInD}
          >
            +
          </button>
        </dir>
      </div>
    </div>
  );
}

export default App;
