import { useEffect, useRef, useState } from "react";


const DataSlider = ({ currentItem, setCurrentItem, btnText, dataItem, addedId }) => {
  const inViewRef = useRef(null);
  const [textInView, setTextInView] = useState(false);
  const [prevItem, setPrevItem] = useState(null);
  
  useEffect(() => {
    let intersectingCount = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingCount++;
            const id = entry.target.getAttribute('data-id');
            const item = dataItem.find((item) => item.id === Number(id));
            if (item) {
              setTextInView(false);
              setPrevItem(currentItem);
              setTimeout(() => {
                setCurrentItem(item);
                setTextInView(true);
              }, 500); // match this with your CSS transition duration
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
        rootMargin: '-40% 0px -40% 0px',
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
  }, [dataItem, currentItem, setCurrentItem]);
  

  return (
    <div className="dataSlider section" id={addedId}>
      <div className="dataSliderWrapper">
        <div className="dataSliderLeft">
          <div className="dataTextContainer">
          <h1 className={textInView ? 'visible' : 'hidden'}>
              {textInView ? currentItem.title : prevItem?.title}
            </h1>
            <h3 className={textInView ? 'visible' : 'hidden'}>
              {textInView ? currentItem.subtitle : prevItem?.subtitle}</h3>
            <p className={textInView ? 'visible' : 'hidden'}>
            {textInView ? currentItem.description : prevItem?.description}
              </p>
            <p className={textInView ? 'visible' : 'hidden'}>
              {textInView ? currentItem.subdescription : prevItem?.subdescription}
              </p>
            <a className={textInView ? 'visible' : 'hidden'} href={currentItem.link} target="_blank" rel="noopener noreferrer">
              {textInView ? btnText : prevItem?.btnText}
            </a>
          </div>
        </div>
        <div className="dataSliderRight" ref={inViewRef}>
          {dataItem.map((item) => (
            <div
              key={item.id}
              data-id={item.id}
              className={"slideImgWrapper"}
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
