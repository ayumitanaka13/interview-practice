import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [input, setInput] = useState("");
  const titles = ["id", "country", "state", "city"];

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const {
          data: { results },
        } = await axios("https://randomuser.me/api/?results=10");
        setApiData(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search"
        />

        <table>
          <thead>
            <tr>
              {titles.map((title, i) => (
                <th key={i}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {apiData
              .filter(({ location }) => {
                if (input === "") {
                  return location;
                } else if (
                  location.country
                    .toLowerCase()
                    .includes(input.toLowerCase()) ||
                  location.state.toLowerCase().includes(input.toLowerCase()) ||
                  location.city.toLowerCase().includes(input.toLowerCase())
                ) {
                  return location;
                }
              })
              .map(({ location }, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{location.country}</td>
                  <td>{location.state}</td>
                  <td>{location.city}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
