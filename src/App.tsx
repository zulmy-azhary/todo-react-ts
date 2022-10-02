import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </div>
  );
};

export default App;
