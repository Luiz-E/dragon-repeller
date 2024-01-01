class Weapon extends Item{
    
    damage;

    constructor(name, type, damage) {
        super(name, type)
        this.damage = damage;
    }

}

export default Weapon