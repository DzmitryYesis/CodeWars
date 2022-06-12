function firstToLast(str, c) {
    let x = str.indexOf(c)
    let y = str.lastIndexOf(c)
    if (x === -1 || y === -1) {
        return -1
    } else {
        return y - x
    }

}