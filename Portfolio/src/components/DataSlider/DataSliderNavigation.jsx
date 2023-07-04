// TODO import arrow pngs
import arrowLeft from "../../assets/img/icons/arrow_left.png";
import arrowRight from "../../assets/img/icons/arrow_right.png";

const DataSliderNavigation = ({setCurrentItem, items, currentItem}) => {
  const goNext = e => {
    e.preventDefault();
    const currentIndex = items.indexOf(currentItem);
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentItem(items[nextIndex]);
  };

  const goPrev = e => {
    e.preventDefault();
    const currentIndex = items.indexOf(currentItem);
    const prevIndex =
      (currentIndex - 1 + items.length) % items.length;
    setCurrentItem(items[prevIndex]);
  };

  return (
    <div className="dataSliderNavigation">
      <a href="#" onClick={goPrev}>
        <img src={arrowLeft} alt="Arrow Icon" />
      </a>
      <a href="#" onClick={goNext}>
        <img src={arrowRight} alt="Arrow Icon" />
      </a>
    </div>
  );
};

export default DataSliderNavigation;
