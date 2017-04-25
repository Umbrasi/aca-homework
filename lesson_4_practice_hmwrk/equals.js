function primitiveEquals(a,b){
    return a===b;
}

function objectEquals(a,b){
    return JSON.stringify(a) === JSON.stringify(b);
}

//cant define equality of functions ?? so if any of those 2 is a function it returns 'false'
function equals(a,b){
    if(typeof a === 'function' || typeof b === 'function'){
        return false;
    }
    if(a !== null && b !== null && typeof a === 'object' && typeof b === 'object'){
        return objectEquals(a,b);
    }
    if(typeof a !== 'object' && typeof b !== 'object'){
        return primitiveEquals(a,b);
    }
    else{
        return false;
    }
}