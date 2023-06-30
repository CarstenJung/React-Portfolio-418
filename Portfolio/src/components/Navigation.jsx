// Importing the necessary hooks and libraries
import { useRef } from "react";
import { gsap } from "gsap";


const Navigation = () => {
  // useRef is used to access the DOM nodes directly within React.
  // This will be used to toggle visibility of the navigation menu
  const navRef = useRef(null);

  // Function that handles showing and hiding the navigation menu
  const showMenu = () => {
    // Reference to the navigation menu
    const navItems = navRef.current;

    // Check the current visibility state of the menu
    // It uses getComputedStyle to get the value of the visibility property
    const isVisible = getComputedStyle(navItems).visibility === "visible";

    // If the navigation menu is not visible, display it
    if (!isVisible) {
      // Change visibility state to visible
      navItems.style.visibility = "visible";

      // Use gsap animation library to animate the appearance of the menu items
      gsap.fromTo(
        navItems.querySelectorAll("li"),
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.5,
          onComplete: () =>
            gsap.set(navItems.querySelectorAll("li"), { clearProps: "all" }),
        }
      );
    } else {
      // If the menu is already visible, hide it
      gsap.fromTo(
        navItems.querySelectorAll("li"),
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: 120,
          stagger: 0.2,
          duration: 0.5,
          onComplete: () => {
            gsap.set(navItems.querySelectorAll("li"), { clearProps: "all" });

            // Hide the navigation
            navItems.style.visibility = "hidden";
          },
        }
      );
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
              <a href="#home">Home</a>
            </li>
              <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
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
