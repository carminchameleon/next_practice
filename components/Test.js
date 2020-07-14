import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import DemoStore from "../stores/demoStore";

const Test = () => {
  const demoStore = useContext(DemoStore);
  useEffect(() => {
    demoStore.loadPosts();
  }, [demoStore]);
  // 의존성 주입을 왜 해냐 할까?

  return (
    <div>
      {demoStore.postRegistry.map((item) => (
        <>{item.title}😄</>
      ))}
    </div>
  );
};

export default observer(Test);
