function getRandomMatrix(n,m){
    var a = new Array(n);
    for(var i = 0; i < a.length; i++) {
        a[i] = new Array(m);
    }
    
    for(var j = 0; j < a.length; j++) {
        for(var k = 0; k < a[j].length; k++) {
            a[j][k]=getRandomInt(100);
        }
    }

    return a;
}