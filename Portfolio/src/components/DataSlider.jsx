import { useEffect, useRef, useState } from "react";

const DataSlider = ({ currentItem, setCurrentItem, dataItem }) => {
  const inViewRef = useRef(null);
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    let intersectingCount = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          const item = dataItem.find((item) => item.id === Number(id));

          if (entry.isIntersecting) {
            intersectingCount++;

            if (item) {
              setTextInView(false);
              setTimeout(() => {
                setCurrentItem(item);
                setTextInView(true);
              }, 0);
            }
          } else if (!entry.isIntersecting) {
            intersectingCount = Math.max(0, intersectingCount - 1);
            if (intersectingCount === 0 && item) {
              setTextInView(false);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
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
  }, [currentItem]);

  return (
    <div className="dataSlider section" id="education">
      <div className="dataSliderWrapper">
        <div className="dataSliderLeft">
          {textInView && (
            <div className="dataTextContainer" key={currentItem.id}>
              <div className="dataTextItem">
                <div className="counterWrapper">
                <span className="bar"></span>
                <p className="counterItem">{currentItem.id}</p>
                </div>
              </div>
              <div className="dataTextItem">
                <h1>
                  <span className="bar"></span>
                  <span className="textItem">{currentItem.title}</span>
                </h1>
              </div>
              <div className="dataTextItem">
              <h3>
                <span className="bar"></span>
                <span className="textItem">{currentItem.subtitle}</span>
              </h3>
              </div>
              <div className="dataTextItem">
              <p>
                <span className="bar"></span>
                <span className="textItem">{currentItem.description}</span>
              </p>
              </div>
              <div className="dataTextItem">
              <p>
                <span className="bar"></span>
                <span className="textItem">{currentItem.subdescription}</span>
              </p>
              </div>
              <div className="dataTextItem">
              <a
                href={currentItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bar"></span>
                <span className="textItem">{currentItem.btnText}</span>
              </a>
            </div>
            </div>
          )}
        </div>

        <div className="dataSliderRight" ref={inViewRef}>
          {dataItem.map((item) => (
            <div key={item.id} data-id={item.id} className="slideImgWrapper">
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

export default DataSlider;
