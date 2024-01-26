import { monsterTypes } from "../data/monsterData.js";

class Monster {
    
    type;
    health;
    damage;
    level;

    constructor(playerLevel, type) {
        this.type = type;
        this.level = this.setLevel(playerLevel);
        this.setStats();
    }


    setLevel = (playerLevel) => {
        const minLevel = playerLevel - 5;
        const maxLevel = playerLevel + 5;
        const randomLevel = Math.floor(Math.random() * (maxLevel - minLevel));
        return Math.max(randomLevel, this.type.minLevel);
    }

    setStats = () => {
        const healthIncrease = 4 / 100
        const damageIncrease = 10 / 100

        this.health = this.type.health + (healthIncrease * this.level * this.type.health);
        this.damage = this.type.damage + (damageIncrease * this.level * this.type.damage);
    }

}

export default Monster