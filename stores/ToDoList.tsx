import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext } from "react";

class ToDoList {
  @observable
  todos = [
    {
      id: 1,
      title: "공부하기",
      finished: false,
    },
  ];

  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  @action addList = (todo: string): void => {
    this.todos.push({
      id: this.todos.length + 1,
      title: todo,
      finished: false,
    });
  };

  @action deleteList = (num: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== num);
  };
}
export default createContext(new ToDoList());
