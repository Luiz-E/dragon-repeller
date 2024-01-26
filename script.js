import Town from "./classes/Town.js";
import Player from "./classes/Player.js";
import { configureInventoryActions, createInventory, createInventoryActions } from "./ui/updatePlayerInfo.js";
const player = new Player();

function main() {
    Town.changeScenery("town");
    createInventory();
    createInventoryActions();
    configureInventoryActions();
}

export default player;

main()
