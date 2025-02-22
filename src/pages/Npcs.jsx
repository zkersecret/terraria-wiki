import npcData from "../data/npcs.json";

export default function Npcs() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">NPCs</h1>
      <ul>
        {npcData.map((npc) => (
          <li key={npc.id} className="my-2">
            <h2 className="text-xl font-semibold">{npc.name}</h2>
            <p>{npc.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}