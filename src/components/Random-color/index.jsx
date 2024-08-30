import React, { useEffect, useState } from "react";
function Randomcolor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");
  function randomColorUtility(codeLength) {
    console.log(codeLength);
    console.log(Math.random());
    console.log(Math.random() * codeLength);
    console.log(Math.floor(Math.random() * codeLength));
    return Math.floor(Math.random() * codeLength);
  }
  function handleRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
      //console.log(hex.length);
      //console.log(randomColorUtility(hex.length));
      //console.log(hex[randomColorUtility(hex.length)]);
      //console.log(hexColor);
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    console.log(rgbColor);
    setColor(rgbColor);
  }
  useEffect(() => {
    if (typeOfColor === "hex") handleRandomHexColor();
    else handleRandomRgbColor();
  }, [typeOfColor]);
  return (
    <>
      <div style={{ background: color, width: "100vw", height: "100vh" }}>
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        <div>
          {typeOfColor === "hex" ? "Hex Color" : "RGB Color"}
          &nbsp;{color}
        </div>
      </div>
    </>
  );
}

export default Randomcolor;
