import "./styles/style.css";
import { useEffect, useMemo, useRef, useState } from "react";

const slowFunc = (num) => {
  console.log("Slow Function");
  for (let i = 0; i <= 100; i++) {
    return num * 2;
  }
};

const App = () => {
  // ref
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // memo
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const double = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <div className="App">
      <div className="container">
        <input
          type="number"
          value={number}
          ref={inputRef}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
          }}
        />
        <button type="button" onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div style={themeStyles}>{double}</div>
      </div>
    </div>
  );
};

export default App;
