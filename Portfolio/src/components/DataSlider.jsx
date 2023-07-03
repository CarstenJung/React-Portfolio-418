const DataSlider = ({ currentItem, setCurrentItem, btnText, dataItem, addedId }) => {


  return (
    <div className="dataSlider section" id={addedId}>
      <div className="dataSliderWrapper">
        <div className="dataSliderLeft">
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
        <div className="dataSliderRight">
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
