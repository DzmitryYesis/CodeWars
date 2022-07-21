function removeEveryOther(arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            resultArr.push(arr[i])
        }
    }
    return resultArr
}