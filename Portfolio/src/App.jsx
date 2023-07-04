import { useState } from "react";
import "./assets/scss/app.scss";

// Components
import WelcomeSection from "./components/WelcomeSection";
import Navigation from "./components/Navigation";
import TextSlideSection from "./components/TextSlideSection";
import DataSlider from "./components/DataSlider/DataSlider";

// Data
import { EducationItems } from "./assets/data/EducationItems";
import { PortfolioItems } from "./assets/data/PortfolioItems";

const App = () => {
  const [currentEducation, setCurrentEducation] = useState(EducationItems[0]);
  const [currentPortfolio, setCurrentPortfolio] = useState(PortfolioItems[0]);

  return (
    <div className="App">
      {/* Navigation component */}
      <Navigation />
      {/* Welcome section component */}
      <WelcomeSection />
      {/* About section components */}
      <TextSlideSection
        title="ABOUT ME"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisi
                  sem. Maecenas imperdiet ante et nulla pulvinar, in ultricies tellus
                  ultricies."
        showIcons={false}
        animationDirection={true}
        addedId="about"
      />
      {/* Education section components */}
      <DataSlider
        currentItem={currentEducation}
        setCurrentItem={setCurrentEducation}
        dataItem={EducationItems}
        btnText="See Certificate"
        text="EDUCATION"
      />
      {/* Portfolio section components */}
      <DataSlider
        currentItem={currentPortfolio}
        setCurrentItem={setCurrentPortfolio}
        dataItem={PortfolioItems}
        btnText="Visit Website"
        text="PORTFOLIO"
      />
      {/* Skills section components */}
      <TextSlideSection
        title="SKILLS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisi
                  sem. Maecenas imperdiet ante et nulla pulvinar, in ultricies tellus
                  ultricies."
        showIcons={false}
        animationDirection={false}
        addedId="skills"
      />
      {/* Contact section components */}
      <TextSlideSection
        title="CONTACT"
        showIcons={true}
        animationDirection={true}
        addedId="contact"
      />
    </div>
  );
};

export default App;
