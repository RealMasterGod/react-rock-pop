import { useRef, useState } from "react";
import "./slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef();

  const handleClick = (dir) => {
    const width = ref.current.getBoundingClientRect().width;
    if (dir === "l") {
      if (index !== 0) {
        ref.current.style.transform = `translateX(-${(index-1)*width}px)`;
        setIndex(index - 1);
      } else {
        ref.current.style.transform = `translateX(-${6*width}px)`;
        setIndex(6);
      }
    } else {
      if (index !== 6) {
        ref.current.style.transform = `translateX(-${(index+1)*width}px)`;
        setIndex(index + 1);
      } else {
        ref.current.style.transform = `translateX(${0}px)`;
        setIndex(0);
      }
    }
  };
  return (
    <div className="slider">
      <div className="sliderContainer" >
        <div className="sliderInfoContainer" ref={ref}>
          {[...Array(7)].map((item,i) => (
            <div key={i} className="info">
              <div className="sliderImgContainer">
                <img className="sliderImg" src="/foodItem.png" alt="" />
              </div>
              <div className="sliderText">
                <span>Crystal Agate Phone Grip&nbsp;</span>
                <span> - 18.99$</span>
              </div>
            </div>
          ))}
        </div>
        <div className="newTag">New Lot</div>
      </div>
      <div className="pagination">
        <div className="controls">
          <div className="leftArrow" onClick={() => handleClick("l")}>
            <img className="leftArrowImg" src="/arrow.png" alt="" />
          </div>
          <div className="page">
            {[...Array(7)].map((item,i) => (
                // console.log(i === index)
                <div key={i} className={index === i ? "activePage" : "pageNumbers"}></div>
            ))}
          </div>
          <div className="rightArrow" onClick={() => handleClick("r")}>
            <img className="rightArrowImg" src="/arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
