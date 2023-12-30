import locations from "../data/locationData.js"
import player from "../script.js"
import {actions, text} from "../ui/uiData.js"

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
        actions[0].onclick = () => player.buyHealthPotion();
        actions[1].onclick = () => player.buyWeapon();
        actions[2].onclick = () => player.buyArmor();
        actions[3].onclick = () => Town.changeScenery("town");
    }

    static performChurchAction() {
        actions[0].onclick = () => player.heal();
        actions[1].onclick = () => player.getStrengthBlessing();
        actions[2].onclick = () => player.getBodyBlessing();
        actions[3].onclick = () => Town.changeScenery("town");
    }

}

export default Town