import React, { useState } from "react";
import Color from "./Color";
import "./Color.css";

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const ColorPicker =() =>{
    const [favorite, setFavorite] = useState("white");

    return(
        <div className="ColorPicker">
      <h2>Select Your Favorite Color</h2>
      <p>
        Your Choice: <Color color={favorite} />
      </p>
      {colors.map((color) => (
        <Color key={color} color={color} onClick={() => setFavorite(color)} />
      ))}
    </div>
    )
};
export default ColorPicker;