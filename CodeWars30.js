function generateIntegers(m, n) {
    var arr=[];
    arr.push(m);
    for (var i=m; i<n; i++) {
      var x=i+1;
      arr.push(x);
    }
    return arr;
  }