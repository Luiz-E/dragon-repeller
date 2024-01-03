import Item from "../classes/Item.js"

const Type = {
    Weapon: "Weapon",
    Potion: "Potion",
    Armor: "Armor",
}

const weapons = [
    new Item(
        "stick",
        Type.Weapon,
        1
    ),
    new Item(
        "hammer",
        Type.Weapon,
        5
    ),
    new Item(
        "sword",
        Type.Weapon,
        15
    )
]

const potions = [
    new Item(
        "healing potion",
        Type.Potion,
        30
    )
]

const armors = [
    new Item (
        "leather armor",
        Type.Armor,
        5,
    ),
    new Item (
        "iron armor",
        Type.Armor,
        15
    )
]

export {weapons, potions, armors, Type}