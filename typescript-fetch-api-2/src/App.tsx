import React, { useState, useEffect } from "react";
import { IUser } from "./interfaces";
import axios from "axios";
import "./App.css";

const App = () => {
  const [apiData, setApiData] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const {
          data: { results },
        } = await axios("https://randomuser.me/api/?results=5");
        setApiData(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="App">
      {apiData.map((user, i) => (
        <div className="card" key={i}>
          <img src={user.picture.large} alt="" />
          <p>{user.name.first}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
