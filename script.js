import Location from "./classes/Location.js";
import Weapon from "./classes/Weapon.js";
import Town from "./classes/Town.js";
import Player from "./classes/Player.js";
import { actions } from "./ui/uiData.js";

function main() {
    actions[0].nextLocation = "store";
    actions[1].nextLocation = "church"

    actions.forEach(action => {
        action.addEventListener("click", () => {
            Town.changeScenery(action.nextLocation)
        })
    });
}

main()