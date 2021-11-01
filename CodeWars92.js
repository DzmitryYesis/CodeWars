function take(arr, n) {
    let arr1=[];
    if(arr.length<1||arr.length<n) {
        return arr;
    }
    else {
        for(let i=0; i<n; i++) {
            arr1.push(arr[i]);
        }
        return arr1;
        // Your code here
    }
}