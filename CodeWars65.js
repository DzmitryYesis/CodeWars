function getAverage(marks){
    var sum = 0;
  for(var i = 0; i < marks.length; i++){
      sum += marks[i];
      }
    var sred=sum/marks.length;
    return Math.floor(sred);
    //TODO : calculate the downward rounded average of the marks array
  }