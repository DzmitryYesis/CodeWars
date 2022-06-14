function threeInOne(arr) {
    let arr2 = []
    for (let i = 1; i < arr.length; i += 3) {
        arr2.push(arr[i - 1] + arr[i] + arr[i + 1])
    }
    return arr2
}