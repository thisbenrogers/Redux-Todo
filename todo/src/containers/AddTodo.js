import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="container row">
      <form
        className="col s8 offset-s2"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input placeholder="type a todo here, hit enter to add" ref={node => (input = node)} />
      </form>
    </div>
  );
};

export default connect()(AddTodo);
