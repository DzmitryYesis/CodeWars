function bmi(weight, height) {
    var x=weight/(height*height);
    if(x<=18.5) {
      return "Underweight";
    } else if(x<=25) {
      return "Normal";
    } else if(x<=30) {
      return "Overweight";
    } else {
    return "Obese";
  }
    }