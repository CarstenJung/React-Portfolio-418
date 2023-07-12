import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const WelcomeSection = () => {
  const textRef = useRef();
  const underlineRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 1366) {
    const split = new SplitText(textRef.current, { type: "words,chars" });
    const chars = split.chars;

    gsap.from(chars, {
      opacity: 0,
      y: 10,
      stagger: 0.03,
      delay: 0.2,
      duration: .5,
    });

    gsap.fromTo(underlineRef.current, {opacity: 0, y: 20}, {opacity: 1, y:0, duration: .7, delay: .8});
  } else {
    gsap.fromTo(textRef.current, {opacity: 0, y: 20}, {opacity: 1, y:0, duration: .7, delay: .8});
  }
  }, []);

  return (
    <div className="welcomeSection section" id="home">
      <h1 ref={textRef}>
        Carsten Jung
      </h1>
      <p ref={underlineRef}>Self-Taught Frontend Web Developer</p>
    </div>
  );
};

export default WelcomeSection;
