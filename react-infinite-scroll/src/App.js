import React, { useCallback, useRef, useState } from "react";
import useBookSearch from "./lib/useBookSearch";

const App = () => {
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const { loading, error, books, hasMore } = useBookSearch(query, pageNum);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prevPageNum) => prevPageNum + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    setPageNum(1);
  };

  return (
    <div className="App">
      <input type="text" value={query} onChange={handleChange} />

      {books.map((book, i) => {
        if (books.length === i + 1) {
          return (
            <div key={i} ref={lastBookElementRef}>
              {book}
            </div>
          );
        } else {
          return <div key={i}>{book}</div>;
        }
      })}

      <div>{loading && "loading..."}</div>
      <div>{error && "error..."}</div>
    </div>
  );
};

export default App;
