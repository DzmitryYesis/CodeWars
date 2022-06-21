function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    let sum = this.draft - 1.5 * this.crew
    if (sum > 20) {
        return true
    } else {
        return false
    }
}