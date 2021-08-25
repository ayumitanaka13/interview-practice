import { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Member from "./pages/Member";
import Home from "./pages/Home";
import MemberDetail from "./pages/MemberDetail";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Counter from "./components/Counter";
import "./styles/style.css";

const slowFunc = (num) => {
  // console.log("Slow Function");
  for (let i = 0; i <= 100; i++) {
    return num * 2;
  }
};

const App = () => {
  // ref
  // const inputRef = useRef();
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
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
        {/* <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/member" component={Member} />
            <Route path="/member/:id" component={MemberDetail} />
          </Switch>
        </Router> */}

        {/* <Form
          number={number}
          inputRef={inputRef}
          setNumber={setNumber}
          setDark={setDark}
          themeStyles={themeStyles}
          double={double}
        /> */}

        <Counter />

      </div>
    </div>
  );
};

export default App;
