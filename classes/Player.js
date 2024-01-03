import { Type as ItemType, potions, armors, weapons } from "../data/itemData.js";
import locations from "../data/locationData.js";

class Player {
    maxHealth;
    health;
    gold;
    damage;
    damageTaken;
    level;
    exp;
    isBlessed;
    inventory;
    actualLocation;

    constructor() {
        this.maxHealth = 100;
        this.health = 100;
        this.gold = 5000;
        this.damage = 1;
        this.damageTaken = 1;
        this.level = 0;
        this.exp = 0;
        this.isBlessed = false        
        this.inventory = []
        for (let i = 0; i < 15; i++) {
            this.inventory[i] = null
        }
        this.actualLocation = locations.find(loc => loc.name === "town")
    }

    freeSpace() {
        for (let i = 0; i < 15; i++) {
            if (this.inventory[i] == null) {
                return i;
            }
        }
        return -1;
    }

    buyItem = (itemType) => {
        const freeSpace = this.freeSpace()
        if (freeSpace == -1) {
            return {
                sucess: false,
                message: "Your inventory is full.",
                itemAdd: null,
            };
        }
        if ((itemType == ItemType.Armor || itemType == ItemType.Weapon) && this.gold >= 50) {
            this.gold -= 50;
            return {
                sucess: true,
                message: `You bought a new ${itemType}.`,
                itemAdded: this.addToInventory(itemType, freeSpace),
            };
        }
        if (itemType == ItemType.Potion && this.gold >= 30) {
            this.gold -= 30;
            return {
                sucess: true,
                message: `You bought a new ${itemType}.`,
                itemAdded: this.addToInventory(itemType, freeSpace),
            };
        }

        return {
            sucess: false,
            message: `You don't have enough money.`,
            itemAdd: null,
        };
        
    }

    heal = () => {
        if (this.gold >= 30) {
            this.health += 30;
            this.gold -= 30;
            return "You heal your wounds.";
        } else {
            return "You don't have enough money.";
        }
    }

    getBlessing = (type) => {
        if (this.gold >= 50 && !this.isBlessed) {
            if (type === "strength") {
                this.damage = (this.damage * 1.2).toFixed(2)
            } else {
                this.damageTaken += 0.95
            }
            this.isBlessed = true;
            this.gold -= 50;
            return "You feel your body getting stronger.";
        } else if (this.gold < 50) {
            return "You don't have enough money.";
        } else {
            return "You are already blessed.";
        }
    }

    addToInventory(item, freeSpace) {
        if (item == ItemType.Potion) {
            this.inventory[freeSpace] = potions[0];
            return {
                item: potions[0],
                position: freeSpace,
            };
        } else if (item == ItemType.Weapon) {
            this.inventory[freeSpace] = weapons[0];
            return {
                item: weapons[0],
                position: freeSpace
            };
        } else {
            this.inventory[freeSpace] = armors[0];
            return {
                item: armors[0],
                position: freeSpace
            };
        }

        
    }

}

export default Player