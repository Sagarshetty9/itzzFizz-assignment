import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./components/Header";
import ScrollAnimation from "./components/ScrollAnimation";
import StatsArea from "./components/StatsArea";

const STATS = [
  { value: "58%", label: "Increase in pick up point use" },
  { value: "23%", label: "Decrease in customer phone calls" },
  { value: "27%", label: "Increase in pick up point use" },
  { value: "40%", label: "Decrease in customer phone calls" },
];

export default function App() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".letter", { autoAlpha: 0, y: 40, duration: 0.9, stagger: 0.06 })
        .from(".stat", { autoAlpha: 0, y: 24, duration: 0.7, stagger: 0.2 }, "-=0.3");
    },
    { scope: root }
  );

  return (
    <main ref={root} className="hero-track relative h-[400vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-12 overflow-hidden bg-neutral-100 px-6">
        <Header />
        <StatsArea stats={STATS} />
        <ScrollAnimation />
      </div>
    </main>
  );
}