import Location from "../classes/Location.js";

const locations = [
    new Location (
        "town",
        [
            "Visit store",
            "Visit priest",
            "Go hunt",
            "Fight dragon"
        ],
        [
            "store",
            "church",
            "hunting grounds",
            "dragon nest"
        ],
        "You are in the town square."
    ), new Location (
        "store",
        [
            "Buy health potion",
            "Buy weapon",
            "Buy Armor",
            "Go to town square"
        ],
        [
            "",
            "",
            "",
            "town"
        ],
        "You are in the store."
    ), new Location (
        "church",
        [
            "Heal",
            "Blessing of strength",
            "Blessing of iron body",
            "Go to town square"
        ],
        [
            "heal",
            "strength",
            "ironBody",
            "town"
        ],
        "You are in the church."
    )
]

export default locations;