import locations from "../data/locationData.js"
import {actions} from "../ui/uiData.js"

class Town {
    static changeScenery(nextLocation) {
        const location = locations.find(loc => loc.name === nextLocation)
        console.log(location)
        actions.forEach((action, i) => {
            action.innerText = location.buttonTexts[i]
            action.nextLocation = location.nextLocation[i]
        })
    }
}

export default Town