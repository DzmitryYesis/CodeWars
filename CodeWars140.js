function padIt(str, n) {
    let number = 1
    while (number <= n) {
        if (number % 2 !== 0) {
            str = '*' + str
        } else {
            str = str + '*'
        }
        number = number + 1
    }
    return str
}