import React, { useState } from "react";

const FIXED_ROWS = 10;
const FIXED_COLS = 30;

const ColorGrid = () => {
  const [selectedColor, setSelectedColor] = useState("#1e7b35");
  const [grid, setGrid] = useState(
    Array.from({ length: FIXED_ROWS }, () => Array.from({ length: FIXED_COLS }, () => "#000000"))
  );

  const handleCellClick = (rowIdx, colIdx) => {
    const newGrid = grid.map((row, r) =>
      row.map((color, c) => (r === rowIdx && c === colIdx ? selectedColor : color))
    );
    setGrid(newGrid);
  };

  return (
    <div className="grid-wrapper">

      <div className="grid-container">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="grid-row">
            {row.map((color, colIdx) => (
              <div
                key={colIdx}
                className="grid-cell"
                style={{ backgroundColor: color }}
                onClick={() => handleCellClick(rowIdx, colIdx)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <label>
          <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="color-picker"/>
        </label>
      </div>
    </div>
  );
};

export default ColorGrid;
