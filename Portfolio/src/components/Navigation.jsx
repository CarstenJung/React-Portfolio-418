// Importing the necessary hooks and libraries
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Home from "../../src/assets/img/icons/home.png"


const Navigation = () => {
  const navRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileIcon, setMobileIcon] = useState(false);

  // useEffect to listen to window resize event
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animateMenu = (isVisible, xValue) => {
    const navItems = navRef.current;

    if (isVisible) {
      gsap.fromTo(
        navItems.querySelectorAll("li"),
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: xValue,
          stagger: 0.2,
          duration: 0.5,
          onComplete: () => {
            gsap.set(navItems.querySelectorAll("li"), { clearProps: "all" });

            // Hide the navigation
            navItems.style.visibility = "hidden";
          },
        }
      );
    } else {
      // Change visibility state to visible
      navItems.style.visibility = "visible";

      gsap.fromTo(
        navItems.querySelectorAll("li"),
        { opacity: 0, x: -xValue },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.5,
          onComplete: () =>
            gsap.set(navItems.querySelectorAll("li"), { clearProps: "all" }),
        }
      );
    }
  };

  const showMenu = () => {
    // Reference to the navigation menu
    const navItems = navRef.current;

    // Check the current visibility state of the menu
    const isVisible = getComputedStyle(navItems).visibility === "visible";

    if (windowWidth < 768) {
      animateMenu(isVisible, 20);
      setMobileIcon(true)
    } else {
      animateMenu(isVisible, 120);
      setMobileIcon(false)
    }
  };

  return (
    <div className="navigationWrapper">
      {/* Navigation button that triggers the showMenu function when clicked */}
      <div onClick={showMenu} className="navBtn">
        <div className="pulse"></div>
      </div>
      {/* Navigation menu that is initially hidden */}
      <div ref={navRef} style={{ visibility: "hidden" }} className="navigation">
        <nav>
          <ul>
            <li>
              <a href="#home">{mobileIcon ? <img class="homeMobile" src={Home} alt="Home" /> : "Home"}</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
