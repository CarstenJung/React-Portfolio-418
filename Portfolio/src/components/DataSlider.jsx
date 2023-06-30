// Code a 2 row layout
// Fill first row with title, description, link, url etc.
// Fill second row with images
// Make the first row sticky when comes to the top of the viewport
// Feet it with the Education and Portfolio Data accordingl to the image
// Use Gsap or observer for this
// When the Component ends scroll to the next component. For that remove sticky.

const DataSlider = ({ currentItem, setCurrentItem, btnText, dataItem }) => {
  return (
    <div className="dataSlider section">
      <div className="dataSliderWrapper">
        <div className="dataSliderLeft">
          <div className="dataTextContainer">
            <h1>{currentItem.title}</h1>
            <h3>{currentItem.subtitle}</h3>
            <p>{currentItem.description}</p>
            <p>{currentItem.subdescription}</p>
            <a href={currentItem.link} target="_blank">
              {btnText}
            </a>
          </div>
        </div>
        <div className="dataSliderRight" style={{height: dataItem.length + '00vh'}}>
          {dataItem.map((item) => {
            return (
              <img
                src={item.image}
                alt={item.title}
                className={
                    // TODO CHECK HOW TO USE THIS TO COUPLE WITH CURRENT ITEM
                  item.id === currentItem.id
                    ? "dataSliderImage active"
                    : "dataSliderImage"
                }
                key={item.id}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataSlider;
