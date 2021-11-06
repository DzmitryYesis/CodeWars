function findDifference(a, b) {
    let x=a[0]*a[1]*a[2];
    let y=b[0]*b[1]*b[2];
    let z=x-y;
    if(z<0) {
        return z*-1;
    } else {
        return z;
    }
    //loading...
}