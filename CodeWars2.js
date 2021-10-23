function rentalCarCost(d) {
    var cost=0;
    if (d<3) {
      cost=d*40;
    } else if (d<7) {
      cost=d*40-20;
    } else {
      cost=d*40-50;
    }
    return cost
    // Your solution here
  }
  // Transportation on vacation