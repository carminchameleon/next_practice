import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import ToDoList from "../../stores/toDoList";
import "./BoardList.scss";
function BoardList(props) {
  const toDoList = useContext(ToDoList);

  const list = useContext(ToDoList);

  return (
    <>
      <div className="board-container">
        {list.todos.map((el) => {
          return (
            <div className="todo-container">
              <>
                <div>{el.id}</div>
                <div className="todo-title">{el.title}</div>
              </>

              <span
                className="delete-icon"
                onClick={() => toDoList.deleteList(el.id)}
              >
                🪓
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default observer(BoardList);
