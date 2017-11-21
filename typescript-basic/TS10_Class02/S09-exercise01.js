var TsCar = (function () {
    function TsCar(name) {
        this.name = name;
        this.speed = 0;
    }
    TsCar.prototype.tsHook = function () {
        console.log("부우우웅");
    };
    ;
    TsCar.prototype.tsAccelerate = function (speed) {
        this.speed = this.speed + speed;
    };
    return TsCar;
}());
var tsCar = new TsCar('BENZ');
tsCar.tsHook();
console.log(tsCar.speed);
tsCar.tsAccelerate(10);
console.log(tsCar.speed);
var TsCar2 = (function () {
    function TsCar2(name) {
        this.name = name;
        this._speed = 0;
    }
    TsCar2.prototype.tsHook = function () {
        console.log("부우우웅");
    };
    ;
    TsCar2.prototype.tsAccelerate = function (speed) {
        this._speed = this._speed + speed;
    };
    TsCar2.prototype.getSpeed = function () {
        return this._speed;
    };
    return TsCar2;
}());
var tsCar2 = new TsCar2('BENZ');
tsCar2.tsHook();
console.log(tsCar2.getSpeed());
tsCar2.tsAccelerate(10);
console.log(tsCar2.getSpeed());
