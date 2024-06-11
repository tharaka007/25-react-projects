import React, { useState } from "react";
import "./styles.css";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getSelectedId) {
    if (selected === getSelectedId) {
      setSelected(null); // Close the item if it's already open
    } else {
      setSelected(getSelectedId); // Open the clicked item
    }
  }

  return (
    <div className="container">
      {data && data.length > 0 ? (
        <div className="accordion">
          {data.map((item) => {
            return (
              <div
                className={`item ${item.id === selected ? "open" : ""}`}
                key={item.id}
              >
                <button
                  onClick={() => handleSingleSelection(item.id)}
                  className="question"
                >
                  <h3>{item.question}</h3>
                  <span>{item.id === selected ? "-" : "+"}</span>
                </button>
                <div className="grid-parent">
                  <p className="answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default Accordion;
