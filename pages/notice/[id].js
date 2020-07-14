import React from "react";
import Notice from "../../components/Notice";

const Index = (props) => {
  return (
    <div>
      <Notice {...props} />
    </div>
  );
};

Index.getInitialProps = async (context) => {
  const id = context.query.id;
  return { id };
};

export default Index;
