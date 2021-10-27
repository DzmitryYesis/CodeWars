function dutyFree(normPrice, discount, hol){
    var x=normPrice/(100/discount);
      var y=hol/x;
      return Math.floor(y);
    }