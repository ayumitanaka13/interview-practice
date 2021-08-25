import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Member = () => {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        const { results } = await res.json();
        setFetchData(results);
        // console.log(results);
      } catch (error) {
        console.err(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h1>Member</h1>
      {fetchData.map((user, i) => (
        <div key={i}>
          <h2>
            <Link
              to={{
                pathname: `/member/${user.login.uuid}`,
                state: { user: user },
              }}
            >
              {user.name.first}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Member;
