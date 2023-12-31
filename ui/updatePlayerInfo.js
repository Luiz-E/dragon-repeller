import { playerHpText, goldText, playerDamageText, text } from "./uiData.js";
import player from "../script.js";

const updateBasicInfo = (message) => {
    playerHpText.innerText = player.health
    goldText.innerText = player.gold
    playerDamageText.innerText = player.damage
    text.innerText = message;
}

export default updateBasicInfo;