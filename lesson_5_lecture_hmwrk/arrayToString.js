'use strict'

function str(a){
    return a+'_';
}

function arrayToString(array, strFunction){
    if(arguments.length!==2){
        return 'Function must get only 2 arguments.'
    }
    if(!Array.isArray(array)){
        return 'First argument must be an array.'
    }
    if(typeof(strFunction)!=='function'){
        return 'Second argument must be a function.'
    }
    else{
        var result = '';
        for(var i=0; i<array.length; i++){
            result += strFunction(array[i])
        }
        return result;
    }
}