function remainder(a, b){
    if(a==0||b==0) {
        return NaN;
    } else if(a>b) {
        return a%b;
    } else {
        return b%a;
    }
    // Divide the larger argument by the smaller argument and return the remainder

}