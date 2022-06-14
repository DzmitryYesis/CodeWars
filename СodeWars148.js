function splitAndMerge(string, separator) {
    return string.split(' ').map(a => a.split('').join(separator)).join(' ')
}