class Location{
    name;
    buttonTexts;
    buttonFunctions;
    text;

    constructor(name, buttonTexts, buttonFunctions, text) {
        this.name = name;
        this.buttonTexts = buttonTexts;
        this.buttonFunctions = buttonFunctions;
        this.text = text;
    }
}
class Weapon {
    name;
    damage;

    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}


const weapons = [
    new Weapon(
        "stick",
        1
    )
]

const locations = [
    new Location (
        "store",
        [
            "Buy health potion (10 gold)",
            "Buy weapon (30 gold)",
            "Buy armor (50 gold)",
            "Go to town square"
        ],
        [
            buyHealthPotion,
            buyWeapon,
            buyArmor,
            goTown
        ],
        "You enter the store."
    ),
    new Location (
        "town",
        [
            "Store",
            "Priest",
            "Cave",
            "Fight dragon"
        ],
        [
            goStore,
            goPriest,
            goCave,
            fightDragon
        ],
        "You go back to the town square."
    ),
    new Location (
        "priest",
        [
            "Heal 50 HP (30 gold)",
            "Blessing of strength ",
            "Blessing of iron body",
            "Go to town square"
        ],
        [
            heal,
            strengthBlessing,
            bodyBlessing,
            goTown
        ],
        "You visit the priest."
    )
]

let playerHp = 100;
const playerHpText = document.querySelector("#playerHp");
let playerLevel = 0;
const playerLevelText = document.querySelector("#playerLevel");
let playerWeapon = 0
let playerDamage = weapons[playerWeapon].damage
const playerDamageText = document.querySelector("#playerDamage")
let gold = 50;
const goldText = document.querySelector("#gold")
const actions = document.querySelectorAll("button")

function go(location) {
    for (let i = 0; i < actions.length; i++) {
        actions[i].innerText = location.buttonTexts[i]
        actions[i].onclick = location.buttonFunctions[i]
    }
    text.innerText = location.text
}

function goStore() {
    go(locations[0])
}



function buyHealthPotion(){}
function buyWeapon(){ alert("weapon")}
function buyArmor(){ alert("armor")}
function goPriest(){
    go(locations[2])
}
function goCave(){}
function fightDragon(){}

function heal() {
    if (gold >= 30) {
        playerHp += 50;
        playerHpText.innerText = playerHp;
        gold -= 30;
        goldText.innerText = gold;
        text.innerText = "The priest heals your wounds."
    } else {
        text.innerText = "You don't have enough gold."
    }
}
function strengthBlessing() {
    playerDamage = (playerDamage * 1.2).toFixed(2);
    playerDamageText.innerText = playerDamage;
}
function bodyBlessing() {

}

function goTown() {
    go(locations[1])
}



actions[0].onclick = goStore
actions[1].onclick = goPriest