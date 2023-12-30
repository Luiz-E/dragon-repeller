import locations from "../data/locationData.js"
import {actions, text} from "../ui/uiData.js"

class Town {
    static changeScenery(nextLocation) {
        const location = locations.find(loc => loc.name === nextLocation)
        actions.forEach((action, i) => {
            action.innerText = location.buttonTexts[i]
            action.nextLocation = location.nextLocation[i]
        })
        text.innerText = location.text
    }
}

export default Town