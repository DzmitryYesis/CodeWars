function DNAtoRNA(dna) {
    let arr=dna.split('');
    let str='';
    for (let i=0; i<arr.length; i++) {
        if(arr[i]=='T') {
            str+='U';
        } else {
            str+=arr[i];
        }
    }
    return str;
    // create a function which returns an RNA sequence from the given DNA sequence
}