import locations from "../data/locationData.js"
import player from "../script.js"
import {actions, text} from "../ui/uiData.js"
import {updateBasicInfo, updateInventory} from "../ui/updatePlayerInfo.js"
import {Type} from "../data/itemData.js"

class Town {
    static changeScenery(nextLocation) {
        const location = locations.find(loc => loc.name === nextLocation)

        actions.forEach((action, i) => {
            action.innerText = location.buttonTexts[i]
        })

        Town.performAction(location.name)

        text.innerText = location.text
    }

    static performAction(locationName) {
        switch (locationName) {
            case "town":
                Town.performTownAction();
                break;
            case "store":
                Town.performStoreAction();
                break;
            case "church":
                Town.performChurchAction();
                break;
        }
    }

    static performTownAction() {
        actions[0].onclick = () => Town.changeScenery("store");
        actions[1].onclick = () => Town.changeScenery("church");
        actions[2].onclick = () => console.log("hunting");
        actions[3].onclick = () => console.log("dragon");
    }

    static performStoreAction() {
        actions[0].onclick = () => {
            const result = player.buyItem(Type.Potion)
            updateInventory(result)
        };
        actions[1].onclick = () => {
            const result = player.buyItem(Type.Weapon)
            updateInventory(result)
        };
        actions[2].onclick = () => {
            const result = player.buyItem(Type.Armor);
            updateInventory(result);
        };
        actions[3].onclick = () => Town.changeScenery("town");
    }

    static performChurchAction() {
        actions[0].onclick = () => {
            const message = player.heal();
            updateBasicInfo(message)
        };
        actions[1].onclick = () => {
            const message = player.getBlessing("strength")
            updateBasicInfo(message);
        };
        actions[2].onclick = () => {
            const message = player.getBlessing("iron body")
            updateBasicInfo(message);
        };
        actions[3].onclick = () => Town.changeScenery("town");
    }

}

export default Town