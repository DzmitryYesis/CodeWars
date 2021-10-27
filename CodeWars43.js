function billboard(name, price = 30){
    var sum=0;
     for (var i=0; i<name.length; i++) {
       sum+=price;
     }
     return sum;
   } 