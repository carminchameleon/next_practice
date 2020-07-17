import React from "react";
import { Carousel, Icon } from "antd";
import "./SignIn.scss";

interface IProps {
  sliderData: IPosts;
}

interface IPosts {
  comments: number;
  id: number;
  likes: number;
  userImg: string;
  postImg: string;
}

const SignIn: React.FC<IProps> = (props: IProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  console.log("check", props.sliderData);
  const { sliderData } = props;
  const onChange = () => {};

  return (
    <div>
      <div className="slider-title"> Slider </div>
      <div className="slider-container">
        <div className="arrow-text ">왼쪽</div>
        <Carousel afterChange={onChange} {...settings} arrows={true}>
          {sliderData.map((item: IPosts) => {
            return (
              <div className="post-container">
                <img className="post-image" alt="" src={item.postImg}></img>
                {item.likes}
              </div>
            );
          })}
        </Carousel>
        <div className="arrow-text ">오른쪽</div>
      </div>
    </div>
  );
};

export default SignIn;
