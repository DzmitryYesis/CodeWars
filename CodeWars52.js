function expressionMatter(a, b, c) {
    var arr=[];
    arr.push(a+b+c);
    arr.push(a*b*c);
    arr.push(a+b*c);
    arr.push(a*b+c);
    arr.push(a*(b+c));
    arr.push((a+b)*c);
    
    return Math.max(...arr); // highest achievable result
  }