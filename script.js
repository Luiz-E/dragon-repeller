import Town from "./classes/Town.js";
import Player from "./classes/Player.js";
import { createInventory } from "./ui/updatePlayerInfo.js";

const player = new Player();

function main() {
    Town.changeScenery("town");
    createInventory();    
}

export default player;

main()
