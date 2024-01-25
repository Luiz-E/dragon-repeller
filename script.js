import Town from "./classes/Town.js";
import Player from "./classes/Player.js";
import { configureInventoryActions, createInventory, createInventoryActions } from "./ui/updatePlayerInfo.js";

import Monster from "./classes/Monster.js";
import { monsterTypes } from "./data/monsterData.js";

const player = new Player();

function main() {
    Town.changeScenery("town");
    createInventory();
    createInventoryActions();
    configureInventoryActions();

    for(let i =0; i < 5; i++) {
        console.log(new Monster(2, "wolf"))
    }

    

}

export default player;

main()
