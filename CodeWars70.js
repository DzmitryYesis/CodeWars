function fixTheMeerkat(arr) {
    var x=arr.shift();
    var y=arr.pop();
    arr.unshift(y);
    arr.push(x);
    return arr;
   //your code here 
  }