function f (){
    var obj;
    if(this===window){
        obj = Object.create(f.prototype);
    }
    else{
        obj = this;
    }
    Object.defineProperty(obj,'x',{
        enumerable: true,
        configurable: true,
        writable: true,
        value: 1
    });
    return obj;
}