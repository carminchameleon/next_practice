import React from "react";
import Layout from "../components/layouts/Layout";
import Board from "../components/Board/Board";
// import { boundActionDecorator } from "mobx/lib/internal";

const board = (props) => {
  const { hideAside } = props;
  return (
    <div>
      <Layout hideAside>
        <Board {...props} />
      </Layout>
    </div>
  );
};

export default board;
