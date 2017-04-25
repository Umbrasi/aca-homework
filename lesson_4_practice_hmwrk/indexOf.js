function indexOf(a,b){
    for(var i=0; i< a.length; i++){
        if(a[i]===b){
            return i;
        }
    }
    return -1;
}