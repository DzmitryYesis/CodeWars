function fakeBin(x){
    var arr=x.split('');
    var str='';
    for (var i=0; i<arr.length; i++) {
      if(arr[i]<5) {
        str+=0;
      } else {
        str+=1;
      }
    }
  return str;
  }