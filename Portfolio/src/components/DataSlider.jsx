import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DataSlider = ({ currentItem, setCurrentItem, btnText, dataItem }) => {
  const dataSliderWrapperRef = useRef(null);
  const dataSliderLeftRef = useRef(null);
  const dataSliderRightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const dataSliderWrapper = dataSliderWrapperRef.current;
    const dataSliderLeft = dataSliderLeftRef.current;
    const dataSliderRight = dataSliderRightRef.current;

    ScrollTrigger.create({
      trigger: dataSliderWrapper,
      start: "top top",
      end: "bottom bottom",
      pin: dataSliderLeft,
      pinSpacing: false,
      markers: true, // For debugging purposes
    });

    ScrollTrigger.create({
      trigger: dataSliderWrapper,
      start: "top top",
      end: () => `+=${dataSliderRight.offsetHeight}`,
      pin: dataSliderWrapper,
      pinSpacing: false,
      markers: true, // For debugging purposes
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <div className="dataSlider section">
      <div className="dataSliderWrapper" ref={dataSliderWrapperRef}>
        <div className="dataSliderLeft" ref={dataSliderLeftRef}>
          <div className="dataTextContainer">
            <h1>{currentItem.title}</h1>
            <h3>{currentItem.subtitle}</h3>
            <p>{currentItem.description}</p>
            <p>{currentItem.subdescription}</p>
            <a href={currentItem.link} target="_blank" rel="noopener noreferrer">
              {btnText}
            </a>
          </div>
        </div>
        <div className="dataSliderRight" ref={dataSliderRightRef}>
          {dataItem.map((item) => (
            <div
              key={item.id}
              className={
                item.id === currentItem.id ? "slideImgWrapper active" : "slideImgWrapper"
              }
            >
              <img src={item.image} alt={item.title} className="dataSliderImage" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataSlider;
