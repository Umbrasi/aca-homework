var list = ['Boeing 737', 'Airbus A319', 'MiG-29', 'AH-64 Apache'];
var accident = {
    date: new Date(),
    transports: [],
    people: 0,
    reason: '',
    toString: function(){
        var print = 'Crash happened on ' + this.date.toString().substr(4,11) +
                    '. Injued: ' + this.people + '. Reason: ' + this.reason;
        return print;
    },
    hasInfo: function(){

    }
}

var aviationAccident = Object.create(accident);
Object.defineProperty(aviationAccident,'altitude',{
    enumerable: true,
    configurable: true,
    writable: true,
    value: 0
});
aviationAccident.toString = function(){
        var print = 'Crash happened on ' + this.date.toString().substr(4,11) +
                    '. Altitude: ' + this.altitude +
                    '. Injued: ' + this.people + '. Reason: ' + this.reason;
        return print;
}

var civAviationAccident = Object.create(aviationAccident);
Object.defineProperty(civAviationAccident, 'airline',{
    enumerable: true,
    configurable: true,
    writable: true,
    value: ''
});
civAviationAccident.toString = function(){
        var print = 'Crash happened on ' + this.date.toString().substr(4,11) +
                    '. Altitude: ' + this.altitude + '. Airline: ' + this.airline +
                    '. Injued: ' + this.people + '. Reason: ' + this.reason;
        return print;
}

var milAviationAccident = Object.create(aviationAccident);
Object.defineProperties(milAviationAccident,{
    'accidentTerritory':{
        enumerable: true,
        configurable: true,
        writable: true,
        value: ''
    },
    'involvedCountries':{
        enumerable: true,
        configurable: true,
        writable: true,
        value: []
    }
})
