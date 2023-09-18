import React from "react";

const contributions = [
  [0, 2, 3, 4, 0, 0, 0],
  [1, 0, 0, 5, 6, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 8, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const colors = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];

function Moodgraph() {
  return (
    <div className="contribution-graph">
      {contributions.map((week, weekIndex) => (
        <div key={weekIndex} className="week">
          {week.map((count, dayIndex) => (
            <div
              key={dayIndex}
              className="day"
              style={{ backgroundColor: colors[count] }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Moodgraph;
