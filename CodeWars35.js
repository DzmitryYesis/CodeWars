function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    var sum=0;
    for (var i=0; i<classPoints.length; i++) {
      sum+=classPoints[i];
    };
    var y=sum/classPoints.length;
    if(yourPoints>y) {
      return true;
    } else {
      return false;
    }
    // Your code here
  }