import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./About.scss";

const About = (props) => {
  const { data } = props;
  const [posts, setPosts] = useState(data);
  const [duration, setDuration] = useState(0);
  const dateDuration = ["Today", "Weekly", "Monthly"];

  const handleDuration = (index) => {
    if (index === 0) {
      getTodayData();
    } else if (index === 1) {
      getDurationData(1);
    } else if (index === 2) {
      getDurationData(2);
    }
  };

  const getDurationData = async (index) => {
    let startDate = moment().format("YYYYMMDD");
    const endDate = moment().format("YYYYMMDD");

    if (index === 1) {
      setDuration(1);
      startDate = moment().subtract(7, "days").format("YYYYMMDD") - 3;
    } else {
      setDuration(2);
      startDate = moment().subtract(1, "months").format("YYYYMMDD") - 3;
    }

    try {
      const result = await axios.get(
        `https://data.roa.ai/v1/rank?start_date=${startDate}&end_date=${endDate}`
      );
      setPosts(result.data.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const getTodayData = async () => {
    setDuration(0);
    let startDate = moment().format("YYYYMMDD") - 3;
    try {
      const result = await axios.get(
        `https://data.roa.ai/v1/rank?start_date=${startDate}`
      );
      setPosts(result.data.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="title">기업 활동 top 10</div>
        <div className="nav">
          {dateDuration.map((el, index) => {
            if (index === duration) {
              return (
                <div
                  key={el}
                  className="active-duration"
                  onClick={() => {
                    handleDuration(index);
                  }}
                >
                  {el}
                </div>
              );
            } else {
              return (
                <div
                  key={el}
                  className="duration"
                  onClick={() => {
                    handleDuration(index);
                  }}
                >
                  {el}
                </div>
              );
            }
          })}
        </div>
        {posts.map((el) => {
          return (
            <div key={el.id} className="post-container">
              <div className="post-category">{el.category.subject}</div>
              <div className="post-contents">
                <div className="post-title">{el.title}</div>
                <div>
                  <span>{el.media}</span>
                  <span> {moment(el.published).format("MM-DD")}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
