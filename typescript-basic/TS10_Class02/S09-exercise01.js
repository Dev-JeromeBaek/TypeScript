/*
    ## Exercise (1)
        - S09-exercise01.js 파일을 TypeScript의 파일로 변환
*/
// 1
class Car10_9 {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    hook10_9() {
        console.log("부우우웅");
    }
    ;
    accelerate10_9(speed) {
        this.speed = this.speed + speed;
    }
}
///////////////////////////////////////////
const car10_9 = new Car10_9('BENZ');
car10_9.hook10_9();
console.log(car10_9.speed);
car10_9.accelerate10_9(10);
console.log(car10_9.speed);
class TsCar2 {
    constructor(name) {
        this.name = name;
        this._speed = 0;
    }
    tsHook() {
        console.log("부우우웅");
    }
    ;
    tsAccelerate(speed) {
        this._speed = this._speed + speed;
    }
    getSpeed() {
        return this._speed;
    }
}
const tsCar2 = new TsCar2('BENZ');
tsCar2.tsHook();
console.log(tsCar2.getSpeed());
tsCar2.tsAccelerate(10);
console.log(tsCar2.getSpeed());
