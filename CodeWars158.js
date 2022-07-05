function points(games) {
    // your code here
    let point = 0
    for (let i = 0; i < games.length; i++) {
        let count = games[i].split(':')
        if (count[0] > count[1]) {
            point = point + 3
        } else if (count[0] === count[1]) {
            point = point + 1
        } else {
            point = point + 0
        }
    }
    return point
}