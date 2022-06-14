function cutIt(arr) {
    let short = arr.reduce((a, b) => a.length <= b.length ? a : b)
    let num = short.length
    let res = arr.map(a => a.slice(0, num))
    return res
}