function digitize(n) {
    var arr=[...n+''].map(n=>+n);
    return arr.reverse();
    //code here
  }