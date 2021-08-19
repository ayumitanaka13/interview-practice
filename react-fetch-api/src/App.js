import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);
  const [userCount, setUserCount] = useState(5);

  // AXIOS
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const {
          data: { results },
        } = await axios(`https://randomuser.me/api/?results=${userCount}`);
        setApiData(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [userCount]);

  // FETCH
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://randomuser.me/api/?results=${userCount}`
  //       );
  //       const { results } = await res.json();
  //       setApiData(results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchApi();
  // }, [userCount]);

  return (
    <div className="App">
      {apiData.map((user, i) => (
        <div key={i} className="card">
          <img src={user.picture.large} alt={user.name.first} />
          <p>{user.name.first}</p>
        </div>
      ))}
      <button type="button" onClick={() => setUserCount(userCount + 5)}>
        See More
      </button>
    </div>
  );
}

export default App;
