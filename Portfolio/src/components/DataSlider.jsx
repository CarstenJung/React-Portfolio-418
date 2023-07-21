// Import Hooks
import { useEffect, useRef, useState } from "react";

const DataSlider = ({ currentItem, setCurrentItem, dataItem }) => {
  // A reference object that will be assigned to the dataSliderRight
  const inViewRef = useRef(null);
  // A state to track whether the text is currently in view or not
  const [textInView, setTextInView] = useState(false);

  // This effect is used to set up an intersection observer which updates
  // the currently viewed item when its intersection state changes
  useEffect(() => {
    let intersectingCount = 0;

    // Instantiate a new Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          const item = dataItem.find((item) => item.id === Number(id));

          // If the entry is intersecting, update the currentItem state
          if (entry.isIntersecting) {
            intersectingCount++;

            if (item) {
              setTextInView(false);
              setTimeout(() => {
                setCurrentItem(item);
                setTextInView(true);
              }, 0);
            }
          }
          // If the entry is not intersecting
          else if (!entry.isIntersecting) {
            intersectingCount = Math.max(0, intersectingCount - 1);
            if (intersectingCount === 0 && item) {
              setTextInView(false);
            }
          }
        });
      },
      {
        // The root margin is expanded so that the observer is triggered when the item is within the central third of the viewport
        rootMargin: "-50% 0px -50% 0px",
      }
    );
      // Start observing all children of inViewRef
    if (inViewRef.current) {
      for (let child of inViewRef.current.children) {
        observer.observe(child);
      }
    }
    // When the component unmounts, stop observing all children of inViewRef
    return () => {
      if (inViewRef.current) {
        for (let child of inViewRef.current.children) {
          observer.unobserve(child);
        }
      }
    };
  }, [currentItem]); // The effect depends on the currentItem state

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
              <div className="dataTextItemMobile">
                <div className="dataMobileImage">
                  <span className="bar"></span>
                  <img
                    className={`textItem ${
                      currentItem.small ? "dataSliderImageSmall" : null
                    }`}
                    src={currentItem.image}
                  />
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
                className={item.small ? "dataSliderImageSmall" : null}
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataSlider;
