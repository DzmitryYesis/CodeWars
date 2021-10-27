function noSpace(x){
    var arr=x.split('');
      for (var i=0; i<arr.length; i++) {
        if(arr[i]==' ') {
          delete arr[i];
        }
      }
      return arr.join('');
    }