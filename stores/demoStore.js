import { observable, action, computed, configure, runInAction } from "mobx";
import { createContext } from "react";
import axios from "axios";

configure({ enforceActions: "always" });

class DemoStore {
  @observable postRegistry = [];
  @observable post = null;
  @observable loadingInitial = false;

  @action loadPosts = async () => {
    this.loadingInitial = true;
    try {
      const posts = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data);
      runInAction(() => {
        // await이후에 state를 수정하려면 다시 액션을 실행한다.
        // 예상하지 못한 것이 일어날 수도 있기 때문에, mobx 쪽에서 사용하라고 해서. ( 없어도 실행은 가능 )
        this.postRegistry = posts;
        this.loadingInitial = false;
        // 상태값 업데이트
      });
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };

  @action loadPost = async (id) => {
    // 하나의 포스트만 불러오는 함수
    this.loadingInitial = true;
    try {
      const post = await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.data);
      runInAction(() => {
        this.post = post;
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };
}

export default createContext(new DemoStore());
