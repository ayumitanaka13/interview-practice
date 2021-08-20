import "./styles/style.css";
import { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default App;
