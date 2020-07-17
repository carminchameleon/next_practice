import React, { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import ToDoList from "../../stores/toDoList";
import BoardList from "../Board/BoardList";
import "./Board.scss";
import { setServers } from "dns";

const Board = (props) => {
  const [todo, setToDo] = useState("");
  const toDoList = useContext(ToDoList);
  const handleChange = (event) => {
    if (event.target.value.length !== 0) {
      setToDo(event.target.value);
    } else {
      alert("입력 해주세요");
    }
  };

  const handleSubmit = () => {
    if (todo !== "") {
      toDoList.addList(todo);
      initInput();
    } else {
      alert("To Do List 입력을 해주세요😄");
    }
  };

  const initInput = () => {
    setToDo("");
  };
  return (
    <>
      <div className="container">
        <div className="title">TO DO LIST</div>
        <form>
          <input
            type="text"
            value={todo}
            className="input-box"
            onChange={(event) => {
              setToDo(event.target.value);
            }}
          ></input>
        </form>

        <input
          type="submit"
          value="submit"
          onClick={() => {
            handleSubmit();
          }}
        />
        <div>Tasks : {toDoList.unfinishedTodoCount}</div>
        <BoardList />
      </div>
    </>
  );
};

export default observer(Board);
