function getGrade (s1, s2, s3) {
    let x=(s1+s2+s3)/3;
    if(90<=x&&x<=100) {
        return 'A';
    } else if(80<=x&&x<90) {
        return 'B';
    } else if(70<=x&&x<80) {
        return 'C';
    } else if(60<=x&&x<70) {
        return 'D';
    } else if(0<=x&&x<60) {
        return 'F';
    }
    // Code here
}