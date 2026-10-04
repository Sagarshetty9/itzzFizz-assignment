import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import heroImg from "../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const lane = useRef(null);

  useGSAP(
    () => {
      const track = lane.current.closest(".hero-track");

      gsap.fromTo(
        ".hero-object",
        { xPercent: -100, x: 0 },
        {
          xPercent: 0,
          x: () => lane.current.offsetWidth,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: lane }
  );

  return (
    //car goes vroom vroom
    <div ref={lane} className="lane flex h-40 w-full items-center overflow-hidden">
      <img src={heroImg} alt="" className="hero-object h-32 w-auto shrink-0" />
    </div>
  );
}