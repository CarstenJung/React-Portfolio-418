import SiteCounter from "./SiteCounter";
import DataSliderNavigation from "./DataSliderNavigation";

const DataSlider = ({ currentItem, setCurrentItem, btnText, dataItem }) => {
  return (
    <div className="dataSlider section">
      <SiteCounter
        counter={currentItem.id}
        text="PORTFOLIO"
        length={dataItem.length}
      />
      <div className="flexColumns">
        <div className="textContainer">
          <h1>{currentItem.title}</h1>
          <h3>{currentItem.subtitle}</h3>
          <p>{currentItem.description}</p>
          <p>{currentItem.subdescription}</p>
          <a href={currentItem.link} target="_blank">
            {btnText}
          </a>
          <DataSliderNavigation
            setCurrentItem={setCurrentItem}
            items={dataItem}
            currentItem={currentItem}
          />
        </div>
      </div>
      <div className="flexColumns">
        <div className="imgContainer">
          <img src={currentItem.image} alt="Certificates" />
        </div>
      </div>
    </div>
  );
};

export default DataSlider;
