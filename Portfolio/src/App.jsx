import "./assets/scss/app.scss";

// Components
import WelcomeSection from "./components/WelcomeSection";
import Navigation from "./components/Navigation";
import TextSlideSection from "./components/TextSlideSection";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <WelcomeSection />
      <TextSlideSection
        title="ABOUT ME"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisi
                  sem. Maecenas imperdiet ante et nulla pulvinar, in ultricies tellus
                  ultricies."
        showIcons={false}
        animationDirection={true}
      />
      <TextSlideSection
        title="SKILLS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nisi
                  sem. Maecenas imperdiet ante et nulla pulvinar, in ultricies tellus
                  ultricies."
        showIcons={false}
        animationDirection={false}
      />
      <TextSlideSection title="CONTACT" showIcons={true} animationDirection={true}/>
    </div>
  );
};

export default App;
