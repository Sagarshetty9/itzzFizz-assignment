const WORDS = ["WELCOME", "ITZFIZZ"];

export default function Header() {
  return (
    <h1
      aria-label="Welcome ItzFizz"
      className="flex gap-x-[1.6em] text-[clamp(1.1rem,4.2vw,3.4rem)] font-semibold"
    >
      {WORDS.map((word) => (
        <span key={word} aria-hidden="true">
          {word.split("").map((ch, i) => (
            <span key={i} className="letter mr-[0.35em] inline-block">
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}