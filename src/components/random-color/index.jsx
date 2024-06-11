import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${hex.padStart(6, "0")}`);
    console.log("color is hex");
  }

  function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
    console.log("color is RGB");
  }

  return (
    <div
      className="container random-color"
      style={{
        display: "block",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={typeOfColor === "hex" ? getRandomHexColor : getRandomRgbColor}
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default RandomColor;
