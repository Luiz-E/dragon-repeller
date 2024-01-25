import { playerHpText, goldText, playerDamageText, text, itemIcon, itemName, itemValue, itemActions, divItemActions, infoWindow } from "./uiData.js";
import player from "../script.js";
import { Type } from "../data/itemData.js";
const inventory = document.querySelector("#inventory")
let onDisplay = null

const updateBasicInfo = (message) => {
    playerHpText.innerText = player.health
    goldText.innerText = player.gold
    playerDamageText.innerText = player.damage
    text.innerText = message;
    console.log(player)
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
        infoWindow[1].style.display = "flex";
        infoWindow[0].style.display = "none";
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
    
    infoWindow[1].style.display = "none";
    infoWindow[0].style.display = "flex";
    onDisplay = {item, div}
    //div.innerHTML = "";
    //removeFromInventory(div.index);
}

const createInventoryActions = () => {
    if (player.actualLocation.name == "store") {
        itemActions[1].innerText = "Sell";
    } else {
        itemActions[1].innerText = "Discard";
    }

    divItemActions.addEventListener("click", () => {
        infoWindow[0].style.display = "none";
        infoWindow[1].style.display = "flex";
    })
    
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
                itemIcon.src = `icons/${result.itemAdded.item.name}.png`;
                itemIcon.alt = "Weapon icon";
                break;
            case Type.Armor:
                itemIcon.src = `icons/${result.itemAdded.item.name}.png`;
                itemIcon.alt = "Armor icon";
        }

        space.appendChild(itemIcon)

    }
    updateBasicInfo(result.message)
}

const configureInventoryActions = () => {
    itemActions[0].addEventListener("click", () => {
        player.useItem(onDisplay);
        updateBasicInfo("");
    })
}

export {updateBasicInfo, createInventory, updateInventory, createInventoryActions, configureInventoryActions};