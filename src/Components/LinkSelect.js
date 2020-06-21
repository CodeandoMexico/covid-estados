import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "./LinkSelectStyle.scss";

const LinkSelect = ({ options = {}, placeholder, type }) => {
  const [isActive, setActive] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    setActive(false);
  }, [id]);
  function getActive(op) {
    return id === op.id ? "active" : "";
  }
  return (
    <nav className={`states ${type}`}>
      <button
        className="states-action"
        onClick={() => setActive(!isActive)}
        type="button"
      >
        {placeholder}
      </button>
      {isActive && (
        <div className="states-options">
          {options.map((option, index) => (
            <Link
              className={`states-option ${getActive(option)}`}
              to={option.url}
              key={index}
            >
              {option.option}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

LinkSelect.defaultProps = {
  placeholder: "select",
  type: "blue",
};

LinkSelect.prototype = {
  placeholder: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["blue", "white"]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default LinkSelect;
