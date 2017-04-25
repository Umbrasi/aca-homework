function matrixIndexOf(a,b){
    for(var i=a.length-1; i>=0; i--){
        for(var j=a[i].length-1; j>=0; j--){
            if(a[i][j]===b){
                return '['+i+']['+j+']';
            }
        }
    }
    return -1;
}