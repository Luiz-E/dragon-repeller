import locations from "../data/locationData.js"
import player from "../script.js"
import {actions, text} from "../ui/uiData.js"
import {createInventoryActions, updateBasicInfo, updateInventory} from "../ui/updatePlayerInfo.js"
import {Type} from "../data/itemData.js"
import Monster from "./Monster.js"
import { monsterTypes } from "../data/monsterData.js"

class Town {
    static changeScenery(nextLocation) {
        const location = locations.find(loc => loc.name === nextLocation)

        actions.forEach((action, i) => {
            action.innerText = location.buttonTexts[i]
        })

        Town.performAction(location)

        text.innerText = location.text
    }

    static performAction(location) {
        player.actualLocation = location

        switch (location.name) {
            case "town":
                Town.performTownAction();
                createInventoryActions();
                break;
            case "store":
                Town.performStoreAction();
                createInventoryActions();
                break;
            case "church":
                Town.performChurchAction();
                createInventoryActions();
                break;
            case "hunting":
                Town.performHuntingAction();
                createInventoryActions();
                break;
            case "forest":
                Town.performForestAction();
                createInventoryActions();
                break;
            
        }
    }

    static performTownAction() {
        actions[0].onclick = () => Town.changeScenery("store");
        actions[1].onclick = () => Town.changeScenery("church");
        actions[2].onclick = () => Town.changeScenery("hunting");
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

    static performHuntingAction() {
        actions[0].onclick = () => Town.changeScenery("forest");
        actions[1].onclick = () => Town.changeScenery("cave");
        actions[2].onclick = () => Town.changeScenery("desert");
        actions[3].onclick = () => Town.changeScenery("town");
    }

    static getRandomMonster() {
        
        let randomPosition = Math.floor(Math.random() * 3);

        switch (randomPosition) {
            case 0: 
                return {
                    "monster": new Monster(player.level, monsterTypes["forest monster"]["goblin"]),
                    "type": "goblin"
                };
            case 1:
                return  {
                    "monster": new Monster(player.level, monsterTypes["forest monster"]["wolf"]),
                    "type":"wolf"
                }
            case 2:
                return {
                    "monster": new Monster(player.level, monsterTypes["forest monster"]["orc"]),
                    "type":"orc"
                }
        }       
    }


    static performForestAction() {
        for (let i = 0; i < 3; i++) {
            let {monster, type} = Town.getRandomMonster();
            actions[i].innerText = "Fight " + type + "\nLevel: " + monster.level;
            actions[i].onclick = () => Town.changeScenery("battle", monster);
        }
        actions[3].onclick = () => Town.changeScenery("town");
    }
}

export default Town