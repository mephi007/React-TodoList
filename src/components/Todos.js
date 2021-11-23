import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let todosStyle ={
      minHeight: "70vh",
      margin: "40px auto"
  }
  return (
    <div className="container my-3" style={todosStyle}>
      <h3>Todos List</h3>
      {props.todos.length===0 ? "No Todos to display" :
      props.todos.map((todo) => {
        return (
        <>
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        <hr />
        </>
        )
      })
    }
    </div>
  );
};
