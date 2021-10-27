const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    var dist=mpg*fuelLeft;
    if(dist>=distanceToPump) {
      return true;
    } else {
      return false;
    }
    // TODO
  };