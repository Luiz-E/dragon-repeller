import updateBasicInfo from "../ui/updatePlayerInfo.js";

class Player {
    maxHealth;
    health;
    gold;
    weaponEquipped;
    damage;
    damageTaken;
    level;
    exp;
    isBlessed;

    constructor() {
        this.maxHealth = 100;
        this.health = 100;
        this.gold = 50;
        this.weaponEquipped = 1;
        this.damage = 1;
        this.damageTaken = 1;
        this.level = 0;
        this.exp = 0;
        this.isBlessed = false
    }

    buyHealthPotion = () => {
        console.log("bougth a health potion");
    }

    buyWeapon = () => {
        console.log("bougth a weapon");
    }

    buyArmor = () => {
        console.log("bougth an armor");
    }

    heal = () => {
        if (this.gold >= 30) {
            this.health += 30;
            this.gold -= 30;
            updateBasicInfo("You heal your wounds.");
        } else {
            updateBasicInfo("You don't have enough money.");
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
            updateBasicInfo("You feel your body getting stronger.")
        } else if (this.gold < 50) {
            updateBasicInfo("You don't have enough money.")
        } else {
            updateBasicInfo("You are already blessed.")
        }
    }

}

export default Player