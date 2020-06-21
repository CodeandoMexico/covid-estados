import React from "react";
import Proptypes from "prop-types";
import "./CounterStyles.scss"

const Counter = ({ title, value }) => (
  <div className="counter">
    <p>{title}</p>
    <span>{value}</span>
  </div>
);

Counter.prototype = {
  title: Proptypes.string.isRequired,
  value: Proptypes.number.isRequired,
};

export default Counter;
