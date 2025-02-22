import bossData from "../data/bosses.json";

export default function Bosses() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bosses</h1>
      <ul>
        {bossData.map((boss) => (
          <li key={boss.id} className="my-2">
            <h2 className="text-xl font-semibold">{boss.name}</h2>
            <p>{boss.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}