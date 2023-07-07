import { useState } from "react";
import "./assets/scss/app.scss";

// Components
import WelcomeSection from "./components/WelcomeSection";
import Navigation from "./components/Navigation";
import TextSlideSection from "./components/TextSlideSection";
import DataSlider from "./components/DataSlider";
import ModalForm from "./components/ModalForm";

// Data
import { DataItems } from "./assets/data/DataItems";

const App = () => {
  const [currentDataItem, setCurrentDataItem] = useState(DataItems[0]);
  
  // MODAL FORM
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation component */}
      <Navigation />
      {/* Welcome section component */}
      <WelcomeSection />
      {/* About section components */}
      <TextSlideSection
        title="ABOUT ME"
        text="Blending years of relationship-building in sales with freshly brewed coding skills, I've become a bit of a professional Swiss Army knife. I've swapped closing deals for coding loops, and boardrooms for responsive breakpoints. My journey has been more unexpected than a plot twist in a Netflix thriller, but boy, has it been exciting!"
        showIcons={false}
        animationDirection={true}
        addedId="about"
      />
      {/* Education section components */}
      <DataSlider
        currentItem={currentDataItem}
        setCurrentItem={setCurrentDataItem}
        dataItem={DataItems}
        btnText="See Certificate"
      />
      {/* Portfolio section components */}
      {/* <DataSlider
        currentItem={currentPortfolio}
        setCurrentItem={setCurrentPortfolio}
        dataItem={PortfolioItems}
        btnText="Visit Website"
        addedId="portfolio"
      /> */}
      {/* Skills section components */}
      <TextSlideSection
        title="SKILLS"
        showIconsSkills={true}
        /* TODO text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisi
                  sem. Maecenas imperdiet ante et nulla pulvinar, in ultricies tellus
                  ultricies." */
        showIcons={false}
        animationDirection={false}
        addedId="skills"
      />
      {/* Contact section components */}
      <TextSlideSection
        title="CONTACT"
        showIconsContact={true}
        animationDirection={true}
        addedId="contact"
        handleOpen={handleOpen}
      />
      <ModalForm open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;
