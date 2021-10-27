const quarterOf = (month) => {
    var sum=0;
    switch(month) {
        case 1:
        case 2:
        case 3:
        sum+=1;
        break;
        case 4:
        case 5:
        case 6:
        sum+=2;
        break;
        case 7:
        case 8:
        case 9:
        sum+=3;
        break;
        case 10:
        case 11:
        case 12:
        sum+=4;
    }
    return sum
}