import Town from "./classes/Town.js";
import Player from "./classes/Player.js";
const inventory = document.querySelector("#inventory")

const player = new Player();

function main() {
    Town.changeScenery("town")
    for (let i = 0; i < 15; i++) {
        const div = document.createElement("div");
        div.id = "inventory-space";
        inventory.appendChild(div);
    }
}

export default player;

main()
