function enough(cap, on, wait) {
    var x=cap-on;
    var y=x-wait;
    if(y>0) {
      return 0;
    } else {
      return y*-1;
    }
    // your code here
  }