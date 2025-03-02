import React, { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null); // Create a ref to attach to the element

  useEffect(() => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is intersecting (visible in the viewport)
        if (entry.isIntersecting) {
          ref.current.classList.add("visible"); // Add the 'visible' class to the element
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Adjust the margin around the root
      }
    );

    // Start observing the element
    if (ref.current) observer.observe(ref.current);

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};


