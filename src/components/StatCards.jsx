export default function StatCards({ value, label }) {
  return (
    <li className="stat">
      <p className="text-4xl font-semibold md:text-6xl">{value}</p>
      <p className="mt-2 max-w-[18ch] text-sm md:text-base">{label}</p>
    </li>
  );
}