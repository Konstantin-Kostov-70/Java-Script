import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

function ChangeColor() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  return (
    <div className="container">
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button className="btn3" onClick={() => {dispatch(changeColor(color))}}>
        Theme Color
      </button>
    </div>
  );
}

export default ChangeColor;
