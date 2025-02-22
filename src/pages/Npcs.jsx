import "react";
import Angler from "../assets/Angler.png";
import Arms_Dealer from "../assets/Arms_Dealer.png";
import Clothier from "../assets/Clothier.png";
import Cyborg from "../assets/Cyborg.png";
import Demolitionist from "../assets/Demolitionist.png";
import Dryad from "../assets/Dryad.png";
import Dye_Trader from "../assets/Dye_Trader.png";
import Goblin_Tinkerer from "../assets/Goblin_Tinkerer.png";
import Golfer from "../assets/Golfer.png";
import Guide from "../assets/Guide.png";
import Mechanic from "../assets/Mechanic.png";
import Nurse from "../assets/Nurse.png";
import Painter from "../assets/Painter.png";
import Party_Girl from "../assets/Party_Girl.png";
import Pirate from "../assets/Pirate.png";
import Santa_Claus from "../assets/Santa_Claus.png";
import Steampunker from "../assets/Steampunker.png";
import Stylist from "../assets/Stylist.png";
import Tavernkeep from "../assets/tavernkeep.png";
import Tax_Collector from "../assets/Tax_Collector.png";
import Truffle from "../assets/Truffle.png";
import Witch_Doctor from "../assets/Witch_Doctor.png";
import Wizard from "../assets/Wizard.png";
import Zoologist from "../assets/Zoologist.png";

import npcData from "../data/npcs.json";

// Mapeia os nomes das imagens para os imports
const imageMap = {
  "Angler.png": Angler,
  "Arms_Dealer.png": Arms_Dealer,
  "Clothier.png": Clothier,
  "Cyborg.png": Cyborg, 
  "Demolitionist.png": Demolitionist,
  "Dryad.png": Dryad,
  "Dye_Trader.png": Dye_Trader,
  "Goblin_Tinkerer.png": Goblin_Tinkerer,
  "Golfer.png": Golfer,
  "Guide.png": Guide,
  "Mechanic.png": Mechanic,
  "Nurse.png": Nurse,
  "Painter.png": Painter,
  "Party_Girl.png": Party_Girl,
  "Pirate.png": Pirate,
  "Santa_Claus.png": Santa_Claus,
  "Steampunker.png": Steampunker,
  "Stylist.png": Stylist,
  "tavernkeep.png": Tavernkeep,
  "Tax_Collector.png": Tax_Collector,
  "Truffle.png": Truffle,
  "Witch_Doctor.png": Witch_Doctor,
  "Wizard.png": Wizard,
  "Zoologist.png": Zoologist
};

export default function Npcs() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 py-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              NPC
            </th>
            <th scope="col" className="px-6 py-3">
              Bioma
            </th>
            <th scope="col" className="px-6 py-3">
              Quem ama
            </th>
            <th scope="col" className="px-6 py-3">
              Quem gosta
            </th>
            <th scope="col" className="px-6 py-3">
              Quem não gosta
            </th>
            <th scope="col" className="px-6 py-3">
              Quem odeia
            </th>
          </tr>
        </thead>
        <tbody>
          {npcData.map((npc) => (
            <tr
              key={npc.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img
                  src={imageMap[npc.image]} // Mapeia o nome da imagem para o import
                  alt={npc.name}
                  className="w-8 scale-x-[-1]"
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {npc.name}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {npc.biome}
              </td>
              <td className="px-6 py-4">
                {npc.loves}
              </td>
              <td className="px-6 py-4">
                {Array.isArray(npc.likes) ? (
                  <ul className="flex space-x-2">
                    {npc.likes.map((like, index) => (
                      <li key={index}>
                        <img
                          src={imageMap[like]} // Mapeia o nome da imagem para o import
                          alt={`${npc.name} likes`}
                          className="w-8 scale-x-[-1]"
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  npc.likes
                )}
              </td>
              <td className="px-6 py-4">
                {npc.dislikes}
              </td>
              <td className="px-6 py-4">
                {npc.hates}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}