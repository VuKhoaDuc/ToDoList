import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let inputNode;
  let inputNumber;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!inputNode.value.trim()) {
            return;
          }
          dispatch(addTodo(inputNode.value, inputNumber.value));
          inputNode.value = "";
          inputNumber.value = ""
        }}
      >
        <input ref={node => (inputNode = node)} placeholder="node" />
        <input ref={node => (inputNumber = node)} placeholder="number" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
    
  );
};

export default connect()(AddTodo);
