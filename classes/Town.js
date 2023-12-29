class Town {
    changeScenery(location) {
        for (let i = 0; i < actions.length; i++) {
            actions[i].innerText = location.buttonTexts[i]
            actions[i].onclick = location.buttonFunctions[i]
        }
        text.innerText = location.text
    }
}