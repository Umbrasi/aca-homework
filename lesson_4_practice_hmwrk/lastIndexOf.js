function lastIndexOf(a,b){
    for(var i=a.length-1; i>=0; i--){
        if(a[i]===b){
            return i;
        }
    }
    return -1;
}