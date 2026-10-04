import StatCards from "./StatCards.jsx";

export default function StatsArea({ stats }) {
  return (
    <ul className="grid w-full max-w-5xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
      {stats.map((s, i) => (
        <StatCards key={i} value={s.value} label={s.label} />
      ))}
    </ul>
  );
}