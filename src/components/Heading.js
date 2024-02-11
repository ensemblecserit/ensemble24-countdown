"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Heading = () => {
  const ref = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".fade_in",
      { opacity: 0 },
      { opacity: 1, y: -50, ease: "power3.out" }
    );
  });

  const handleHover = () => {
    gsap.fromTo(
      ".fade_in",
      1,
      { letterSpacing: 1 },
      {
        scale: 1.04,
        letterSpacing: 100,
        ease: "power3.out",
      }
    );
  };
  const handleLeave = () => {
    gsap.to(".fade_in", { scale: 1, ease: "power3.out" });
  };
  return (
    <p
      ref={ref}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="billy fade_in opacity-0 text-[58px] lg:text-[180px] font-extrabold absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center text-white z-[50] select-none"
    >
      ENSEMBLE
    </p>
  );
};

export default Heading;
