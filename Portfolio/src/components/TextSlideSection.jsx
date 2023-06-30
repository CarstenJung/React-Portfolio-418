// Importing necessary React hooks
import { useEffect, useRef } from "react";

// Importing various icons for use in this component
import MAIL from "../assets/img/icons/mail.png";
import CALENDLY from "../assets/img/icons/calendly.png";
import CALL from "../assets/img/icons/call.png";
import LINKEDIN from "../assets/img/icons/linkedin.png";

// GSAP ANIMATION LIBRARY
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextSlideSection = ({
  title,
  text,
  showIcons,
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
            scrub: 3,
          },
        }
      );
    } else {
      // GSAP animation to animate the slideHeader span from the right end of the viewport to the middle
      gsap.fromTo(
        bcgRef.current,
        { x: "90vw" },
        {
          x: "50vw",
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: bcgRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: 3,
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
      {!showIcons && <span className="slideText">{text}</span>}
      {showIcons && (
        <div className="contactWrapper">
          <div className="logoContainer">
            <img src={MAIL} alt="Mail" />
            <img src={CALENDLY} alt="Calendly" />
            <img src={CALL} alt="Phone" />
            <img src={LINKEDIN} alt="LinkedIN" />
          </div>
          <div className="contactInformation">
            <div className="contactItemWrapper">
              <span className="contactItem">+49 (0)176 / 60145188</span>
              <span className="contactItem">hello@carstenjung.io</span>
            </div>
            <div className="legalNoticeWrapper">
              <span className="legalNotice">Impressum</span>
              <span className="legalNotice">Datenschutz</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextSlideSection;
