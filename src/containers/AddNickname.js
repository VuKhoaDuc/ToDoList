import React from "react";
import { connect } from "react-redux";
import { getDataBackend, typeChangeInput } from "../actions";

const AddNickname = ({ dispatch }) => {
  let inputNode;

  const onClickGetData = nickname => {
    dispatch(getDataBackend(nickname));
  };

  return (
    <div>
      <form>
        <input
          ref={node => (inputNode = node)}
          placeholder="Nick name"
          onChange={() => {
            dispatch(typeChangeInput());
          }}
        />
      </form>

      <button onClick={() => onClickGetData(inputNode.value)}>
        Nhập dữ liệu{" "}
      </button>
    </div>
  );
};

export default connect()(AddNickname);
