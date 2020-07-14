import React from "react";
import axios from "axios";
import moment from "moment";
import Layout from "../components/layouts/Layout";
import About from "../components/About/About";

const about = (props) => {
  const { hideAside } = props;
  return (
    <div>
      <Layout hideAside>
        <About {...props} />
      </Layout>
    </div>
  );
};

about.getInitialProps = async (context) => {
  const today = parseInt(moment().format("YYYYMMDD")) - 3;

  try {
    const result = await axios.get(
      `https://data.roa.ai/v1/rank?start_date=${today}`
    );
    return { data: result.data.data };
  } catch (error) {
    return { error: error.message };
  }
};

export default about;
