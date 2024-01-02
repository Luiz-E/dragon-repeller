import { playerHpText, goldText, playerDamageText, text } from "./uiData.js";
import player from "../script.js";
import { Type } from "../data/itemData.js";
const inventory = document.querySelector("#inventory")

const updateBasicInfo = (message) => {
    playerHpText.innerText = player.health
    goldText.innerText = player.gold
    playerDamageText.innerText = player.damage
    text.innerText = message;
}

const createInventory = () => {
    for (let i = 0; i < 15; i++) {
        const div = document.createElement("div");
        div.id = "inventory-space";
        div.index = i
        div.addEventListener("click", () => {
            player.removeFromInventory(div.index)
        })
        inventory.appendChild(div);
    }
}

const updateInventory = (result) => {
    if (result.sucess) {
        const space = document.querySelectorAll("#inventory > div")[result.itemAdded.position];
        console.log(space)
        if (result.itemAdded.item.type == Type.Potion) {
            space.style.backgroundColor = "green";
        } else if (result.itemAdded.item.type == Type.Weapon) {
            space.style.backgroundColor = "red";
        } else {
            space.style.backgroundColor = "blue"
        }
    }
    updateBasicInfo(result.message)
}

export {updateBasicInfo, createInventory, updateInventory};