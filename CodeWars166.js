function defineSuit(card) {
    // good luck
    let arr = card.split('')
    if (arr[arr.length - 1] === '♣') {
        return 'clubs'
    } else if (arr[arr.length - 1] === '♦') {
        return 'diamonds'
    } else if (arr[arr.length - 1] === '♥') {
        return 'hearts'
    } else if (arr[arr.length - 1] === '♠') {
        return 'spades'
    }
}