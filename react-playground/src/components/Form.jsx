import React from "react";

const Form = ({
  number,
  inputRef,
  setNumber,
  setDark,
  themeStyles,
  double,
}) => {
  return (
    <>
      <input
        type="number"
        value={number}
        ref={inputRef}
        onChange={(e) => {
          setNumber(+e.target.value);
          // setNumber(parseInt(e.target.value));
        }}
      />
      <button type="button" onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{double}</div>
    </>
  );
};

export default Form;
