function replaceAll(seq, find, replace) {
    return seq.map(a => a === find ? replace : a);
}