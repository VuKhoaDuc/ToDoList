import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, number }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text} - {number}

  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

export default Todo;
