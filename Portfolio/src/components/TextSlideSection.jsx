// Importing necessary React hooks
import { useEffect, useRef } from "react";

// Importing various icons for use in Contact section
import MAIL from "../assets/img/icons/mail.png";
import CALENDLY from "../assets/img/icons/calendly.png";
import CALL from "../assets/img/icons/call.png";
import LINKEDIN from "../assets/img/icons/linkedin.png";


// Importing various icons for use in Skills section
import HTML from "../assets/img/icons/html.png";
import CSS from "../assets/img/icons/css.png";
import JS from "../assets/img/icons/js.png";
import REACT from "../assets/img/icons/react.png";
import SASS from "../assets/img/icons/sass.png";
import GIT from "../assets/img/icons/git.png";



// GSAP ANIMATION LIBRARY
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextSlideSection = ({
  title,
  text,
  showIconsContact,
  showIconsSkills,
  animationDirection,
  addedId,
}) => {
  // useRef hook to get a reference to the slideHeader span
  const bcgRef = useRef(null);

  useEffect(() => {
    // Check for the animation direction
    if (animationDirection) {
      // Use GSAP to animate the slideHeader span from the start of the viewport to 10vw from the left
      gsap.fromTo(
        bcgRef.current,
        { x: "0vw" },
        {
          x: "10vw",
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: bcgRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: 4,
          },
        }
      );
    } else {
      // GSAP animation to animate the slideHeader span from the right end of the viewport to the middle
      gsap.fromTo(
        bcgRef.current,
        { right: "0" },
        {
          left: "30%",
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: bcgRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: 4,
          },
        }
      );
    }
  }, []);

  return (
    <div className="textSlideSection section" id={addedId}>
      <span ref={bcgRef} className="slideHeader">
        {title}
      </span>
      {!showIconsContact && <span className="slideText">{text}</span>}
      {showIconsContact && (
        <div className="contactWrapper">
          <div className="iconContainer">
            <img src={MAIL} alt="Mail" />
            <img src={CALENDLY} alt="Calendly" />
            <img src={CALL} alt="Phone" />
            <img src={LINKEDIN} alt="LinkedIN" />
            <div className="contactInformation">
              <p className="contactItem">+49 (0)176 / 60145188</p>
              <p className="contactItem">hello@carstenjung.io</p>
            </div>
          </div>
        </div>
      )}
      {showIconsSkills && (
        <div className="contactWrapper">
          <div className="iconContainer">
            <img src={HTML} alt="HTML" />
            <img src={CSS} alt="CSS" />
            <img src={JS} alt="JavaScript" />
            <img src={REACT} alt="React" />
            <img src={SASS} alt="SASS" />
            <img src={GIT} alt="Git" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextSlideSection;
