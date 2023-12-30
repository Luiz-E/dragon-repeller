class Location{
    name;
    buttonTexts;
    nextLocation;
    text;

    constructor(name, buttonTexts, nextLocation, text) {
        this.name = name;
        this.buttonTexts = buttonTexts;
        this.nextLocation = nextLocation;
        this.text = text;
    }
}

export default Location