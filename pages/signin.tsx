import React from "react";
import Layout from "../components/layouts/Layout";
import SignIn from "../components/SignIn/SignIn";
import { GetStaticProps } from "next";
import axios from "axios";

interface IProps {
  sliderData?: object;
}

const signin: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <div>
        <Layout hideAside>
          <SignIn {...props} />
        </Layout>
      </div>
    </div>
  );
};

export default signin;

/* Data fetching for server side rende */
export const getStaticProps: GetStaticProps = async (context): any => {
  try {
    const result = await axios.get(
      "https://my-json-server.typicode.com/hong-dev/json_server/posts"
    );
    return {
      props: {
        sliderData: result.data,
      },
    };
  } catch (error) {
    console.log("error", error);
  }
};
