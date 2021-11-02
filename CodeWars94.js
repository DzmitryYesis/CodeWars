var humanYearsCatYearsDogYears = function(humanYears) {
    let result = [];
    result.push(humanYears);
    if (humanYears == 1) {
        result.push(15);
        result.push(15);
    } else if (humanYears == 2) {
        result.push(24);
        result.push(24);
    } else if (humanYears > 2) {
        result.push((humanYears - 2) * 4 + 24);
        result.push((humanYears - 2) * 5 + 24);
    }
    // Your code here!
    return result;
}