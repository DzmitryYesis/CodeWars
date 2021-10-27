function strCount(str, letter){ 
    var sum=0;
    var arr=str.split('');
    for (var i=0; i<arr.length; i++ ) {
      if(arr[i]==letter) {
        sum+=1;
      }
    }
    if (str.length<1) {
      return 0;
    } else {
      return sum;
    }
    //code here
  }