import Town from "./classes/Town.js";
import Player from "./classes/Player.js";
import { createInventory, createInventoryActions } from "./ui/updatePlayerInfo.js";

const player = new Player();

function main() {
    Town.changeScenery("town");
    createInventory();
    createInventoryActions();
}

export default player;

main()
