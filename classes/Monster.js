import { monsterTypes } from "../data/monsterData.js";

class Monster {
    
    type;
    health;
    damage;
    level;

    constructor(playerLevel, type) {
        this.type = type;
        this.level = this.setLevel(playerLevel, type);
        this.setStats(type);
    }


    setLevel = (playerLevel, type) => {
        const minLevel = playerLevel - 5;
        const maxLevel = playerLevel + 5;
        const randomLevel = Math.floor(Math.random() * (maxLevel - minLevel));
        return Math.max(randomLevel, monsterTypes[type].minLevel);
    }

    setStats = (type) => {
        const healthIncrease = 4 / 100
        const damageIncrease = 10 / 100

        this.health = monsterTypes[type].health + (healthIncrease * this.level * monsterTypes[type].health);
        this.damage = monsterTypes[type].damage + (damageIncrease * this.level * monsterTypes[type].damage);
    }

}

export default Monster