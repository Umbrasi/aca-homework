function matrixIndexOf(a,b){
    for(var i=0; i<a.length; i++){
        for(var j=0; j<a[i].length; j++){
            if(a[i][j]===b){
                return '['+i+']['+j+']';
            }
        }
    }
    return -1;
}