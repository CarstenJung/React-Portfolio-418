// Importing necessary React hooks
import { useEffect, useRef, useState } from "react";

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
  handleOpen,
}) => {
  // useRef hook to get a reference to the slideHeader span
  const bcgRef = useRef(null);
  const iconSkillsRef = useRef(null);
   // Using useState to hold the current window width
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to animate the slideHeader span
  const animateSlideHeader = (element, animationDirection) => {
    const animationProps = {
      ease: "Power2.easeInOut",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom center",
        scrub: 4,
      },
    };

    if (animationDirection) {
      // Animation from the start of the viewport to 10vw from the left
      gsap.fromTo(element, { x: "0vw" }, { x: "10vw", ...animationProps });
    } else {
      // Animation from the right end of the viewport to the middle
      gsap.fromTo(element, { right: "0" }, { left: "25%", ...animationProps });
    }
  };

  // useEffect hook to animate the slideHeader span
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    if (bcgRef.current) {
      animateSlideHeader(bcgRef.current, animationDirection);

      if (!animationDirection && iconSkillsRef.current) {
        const iconAnimationProps = {
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: iconSkillsRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: 4,
          },
        };
        gsap.fromTo(
          iconSkillsRef.current,
          { x: "-30%" },
          { x: "-10%", ...iconAnimationProps }
        );
      }
    }

    if (windowWidth < 768) {
      if (bcgRef.current) {
        animateSlideHeader(bcgRef.current, animationDirection);

        if (!animationDirection && iconSkillsRef.current) {
          const iconAnimationProps = {
            ease: "Power2.easeInOut",
            scrollTrigger: {
              trigger: iconSkillsRef.current,
              start: "top bottom",
              end: "bottom center",
              scrub: 4,
            },
          };
          gsap.fromTo(
            iconSkillsRef.current,
            { x: "-30%" },
            { x: "-5%", ...iconAnimationProps }
          );
        }
      }
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="textSlideSection section" id={addedId}>
      <span ref={bcgRef} className="slideHeader">
        {title}
      </span>
      {!showIconsContact && <span className="slideText">{text}</span>}
      {showIconsContact && (
        <div className="contactWrapper">
          <div className="iconContainer contactIcons">
            <img src={MAIL} alt="Mail" onClick={handleOpen} />
            <a
              href="https://calendly.com/carstenjung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CALENDLY} alt="Calendly" />
            </a>
            <a href="tel:017660145188" rel="noopener noreferrer">
              <img src={CALL} alt="Phone" />
            </a>
            <a
              href="https://www.linkedin.com/in/carsten-jung-44a760177"
              target="_blank"
            >
              <img src={LINKEDIN} alt="LinkedIN" />
            </a>
            <div className="contactInformation">
              <p className="contactItem">+49 (0)176 / 60145188</p>
              <p className="contactItem">hello@carstenjung.io</p>
            </div>
          </div>
        </div>
      )}
      {showIconsSkills && (
        <div className="contactWrapper">
          <div className="iconContainer" ref={iconSkillsRef}>
            <figure>
              <img src={HTML} alt="HTML" className="iconSizeHTML" />
              <figcaption>HTML</figcaption>
            </figure>
            <figure>
              <img src={CSS} alt="CSS" className="iconSizeCSS" />
              <figcaption>CSS</figcaption>
            </figure>
            <figure>
              <img src={JS} alt="JavaScript" />
              <figcaption>Java Script</figcaption>
            </figure>
            <figure>
              <img src={REACT} alt="React" />
              <figcaption>React</figcaption>
            </figure>
            <figure>
              <img src={SASS} alt="SASS" />
              <figcaption>SASS</figcaption>
            </figure>
            <figure>
              <img src={GIT} alt="Git" />
              <figcaption>GIT</figcaption>
            </figure>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextSlideSection;
