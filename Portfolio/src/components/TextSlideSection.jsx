import MAIL from "../assets/img/icons/mail.png";
import CALENDLY from "../assets/img/icons/calendly.png";
import CALL from "../assets/img/icons/call.png";
import LINKEDIN from "../assets/img/icons/linkedin.png";
import { useEffect, useRef } from "react";

// GSAP ANIMATION LIBRARY
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextSlideSection = ({ title, text, showIcons, animationDirection }) => {
  const bcgRef = useRef(null);

  useEffect(() => {
    if (animationDirection) {
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
    <div className="textSlideSection section">
      <span ref={bcgRef} className="slideHeader">
        {title}
      </span>
      {!showIcons && <span className="slideText">{text}</span>}
      {showIcons && (
        <div className="logoContainer">
          <img src={MAIL} alt="Mail" />
          <img src={CALENDLY} alt="Calendly" />
          <img src={CALL} alt="Phone" />
          <img src={LINKEDIN} alt="LinkedIN" />
        </div>
      )}
    </div>
  );
};

export default TextSlideSection;
