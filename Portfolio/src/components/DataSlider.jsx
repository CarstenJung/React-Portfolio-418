import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const DataSlider = ({
  currentItem,
  setCurrentItem,
  btnText,
  dataItem,
}) => {
  const inViewRef = useRef(null);
  const [textInView, setTextInView] = useState(false);

  useEffect(() => {
    let intersectingCount = 0;

    if (inViewRef.current) {
      for (let child of inViewRef.current.children) {
        // Set initial opacity to 0 for each child through GSAP
        gsap.set(child, { opacity: 0 });
      }
    }

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

        // Animate opacity to 1 when the element is intersecting
        gsap.fromTo(entry.target, { opacity: 0}, { opacity: 1, duration: 2});
        gsap.to(".dataTextContainer", { "--beforeWidth": "0%", duration: 2 });

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
    <div className="dataSlider section">
      <div className="dataSliderWrapper">
        <div className="dataSliderLeft">
          {textInView && (
          <div className="dataTextContainer" key={currentItem.id}>
            <h1>{currentItem.title}</h1>
            <h3>{currentItem.subtitle}</h3>
            <p>{currentItem.description}</p>
            <p>{currentItem.subdescription}</p>
            <a href={currentItem.link} target="_blank" rel="noopener noreferrer">
              {btnText}
            </a>
          </div>
          )}
        </div>

        <div className="dataSliderRight" ref={inViewRef} >
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
