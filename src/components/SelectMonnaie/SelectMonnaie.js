import React from "react";

const SelectMonnaie = ({ ...props }) => {
  const options = [
    { value: "EUR", text: "EUR" },
    { value: "CHF", text: "CHF" },
    { value: "GBP", text: "GBP" },
    { value: "USD", text: "USD" }
  ];
  return (
    <select
      className="browser-default"
      name="inputDevises"
      id="inputDevises"
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default SelectMonnaie;
