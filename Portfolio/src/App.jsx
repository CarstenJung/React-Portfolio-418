// Import Hooks
import { useState } from "react";
// Import the main SCSS styles for the application
import "./assets/scss/app.scss";

// Components
import WelcomeSection from "./components/WelcomeSection";
import Navigation from "./components/Navigation";
import TextSlideSection from "./components/TextSlideSection";
import DataSlider from "./components/DataSlider";
import ModalForm from "./components/ModalForm";

// Import Data for DataSlider
import { DataItems } from "./assets/data/DataItems";

const App = () => {
  // State to keep track of the current data item (DataSlider)
  const [currentDataItem, setCurrentDataItem] = useState(DataItems[0]);

  // State to control whether the modal form is open or not
  const [open, setOpen] = useState(false);

  // Function to open the modal form
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal form
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {/* Rotate message */}
      <div id="rotateDeviceMessage"><h1>Please rotate your device.</h1></div>
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
      />
      {/* Skills section components */}
      <TextSlideSection
        title="SKILLS"
        showIconsSkills={true}
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
