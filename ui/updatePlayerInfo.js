import { playerHpText, goldText, playerDamageText, text, itemIcon, itemName, itemValue, itemActions } from "./uiData.js";
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
            loadInfo(div)
        })
        inventory.appendChild(div);
    }
}

const loadInfo = (div) => {
    if (div.firstChild == null) {
        return
    }

    const item = player.inventory[div.index]

    itemIcon.innerHTML = "";
    itemName.innerText = "";
    itemValue.innerText = "";
    
    const img = document.createElement("img")
    img.src = `icons/${item.name}.png`
    itemIcon.appendChild(img)

    itemName.innerText = item.name.toUpperCase()

    let valueMessage;

    switch (item.type) {
        case Type.Armor:
            valueMessage = `Damage Ignored: ${item.value}%`
            break;
        case Type.Weapon:
            valueMessage = `Damage: ${item.value}`
            break;
        case Type.Potion:
            valueMessage = "Heal: " + item.value + " HP"
            break;
    }
    
    itemValue.innerText = valueMessage
    
    //div.innerHTML = "";
    //removeFromInventory(div.index);
}

const createInventoryActions = () => {
    if (player.actualLocation.name == "store") {
        itemActions[1].innerText = "Sell";
    } else {
        itemActions[1].innerText = "Discard";
    }
}

const removeFromInventory = (item) => {
    player.inventory[item] = null
}

const updateInventory = (result) => {
    if (result.sucess) {
        const itemIcon = document.createElement("img")
        const space = document.querySelectorAll("#inventory > div")[result.itemAdded.position];
        
        switch (result.itemAdded.item.type) {
            case Type.Potion:
                itemIcon.src = "icons/healing potion.png";
                itemIcon.alt = "Potion icon";
                break;
            case Type.Weapon: 
                itemIcon.src = "icons/stick.png";
                itemIcon.alt = "Weapon icon";
                break;
            case Type.Armor:
                itemIcon.src = "icons/leather armor.png";
                itemIcon.alt = "Armor icon";
        }

        space.appendChild(itemIcon)

    }
    updateBasicInfo(result.message)
}

export {updateBasicInfo, createInventory, updateInventory, createInventoryActions};