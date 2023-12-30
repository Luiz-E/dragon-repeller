class Player {
    maxHealth;
    health;
    gold;
    weaponEquipped;
    level;
    exp;

    constructor() {
        this.maxHealth = 100;
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
        console.log("healing")
    }

    getStrengthBlessing = () => {
        console.log("strength")
    }

    getBodyBlessing = () => {
        console.log("body")
    }
    
}

export default Player