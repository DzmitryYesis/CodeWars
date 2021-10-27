function strCount(str, letter){  
    var arr=str.split('');
    var sum=0;
    for (var i=0; i<arr.length; i++) {
      if(arr[i]==letter) {
        sum+=1;
      }
    }
    if(arr.length<1) {
      return 0;
    } else {
    return sum
    //code here
  }
    }