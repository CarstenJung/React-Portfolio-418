import { useEffect, useRef, useState } from "react";

const Education = ({
  currentItem,
  setCurrentItem,
  btnText,
  dataItem,
  addedId,
}) => {
  const inViewRef = useRef(null);
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    let intersectingCount = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingCount++;
            const id = entry.target.getAttribute("data-id");
            const item = dataItem.find((item) => item.id === Number(id));
            if (item) {
              setTextInView(false);
              setTimeout(() => {
                setCurrentItem(item);
                setTextInView(true);
              }, 0);
            }
          } else {
            intersectingCount = Math.max(0, intersectingCount - 1);
            if (intersectingCount === 0) {
              setTextInView(false);
            }
          }
        });
      },
      {
        rootMargin: "-60% 0px -40% 0px",
      }
    );

    if (inViewRef.current) {
      for (let child of inViewRef.current.children) {
        observer.observe(child);
      }
    }

    return () => {
      if (inViewRef.current) {
        for (let child of inViewRef.current.children) {
          observer.unobserve(child);
        }
      }
    };
  }, [dataItem, currentItem]);

  return (
    <div className="dataSlider section" id={addedId}>
      <div className="dataSliderWrapper">
        <div className="dataSliderLeft">
          <div
            className={`dataTextContainer ${textInView ? "visible" : "hidden"}`}
          >
            <h1>{currentItem.title}</h1>
            <h3>{currentItem.subtitle}</h3>
            <p>{currentItem.description}</p>
            <p>{currentItem.subdescription}</p>
            <a href={currentItem.link} target="_blank" rel="noopener noreferrer">
              {btnText}
            </a>
          </div>
        </div>
        <div className="dataSliderRight" ref={inViewRef}>
          {dataItem.map((item) => (
            <div key={item.id} data-id={item.id} className={"slideImgWrapper"}>
              <img
                src={item.image}
                alt={item.title}
                className="dataSliderImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
