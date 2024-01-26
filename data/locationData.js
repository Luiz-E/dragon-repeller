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
            "hunting",
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
            "",
            "",
            "",
            "town"
        ],
        "You are in the church."
    ), new Location (
        "hunting",
        [
            "Go to the forest",
            "Go to the cave",
            "Go to the desert",
            "Go back to town"
        ],
        [
            "forest",
            "cave",
            "desert",
            "town"
        ],
        "You are in the hunting grounds."
    )
]

export default locations;