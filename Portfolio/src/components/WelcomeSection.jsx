// Import necessary libraries and hooks
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register the SplitText plugin from GSAP
gsap.registerPlugin(SplitText);

const WelcomeSection = () => {
  // Initialize refs for the text and underline
  const textRef = useRef();
  const underlineRef = useRef();

  // Function to check if the browser is Safari
  function isSafari() {
    return (
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(!window["safari"] || safari.pushNotification)
    );
  }

  // useEffect to animate the text and underline
  useEffect(() => {
    if (!isSafari() && window.innerWidth > 1366) {
      const split = new SplitText(textRef.current, { type: "words,chars" });
      const chars = split.chars;

      gsap.from(chars, {
        opacity: 0,
        y: 10,
        stagger: 0.03,
        delay: 0.2,
        duration: 0.5,
      });

      gsap.fromTo(
        underlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.8 }
      );
    } else {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
      );
      gsap.fromTo(
        underlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 1 }
      );
    }
  }, []);

  return (
    <div className="welcomeSection section" id="home">
      <h1 ref={textRef}>Carsten Jung</h1>
      <p ref={underlineRef}>Self-Taught Frontend Web Developer</p>
    </div>
  );
};

export default WelcomeSection;
