/*
    ## Exercise (1)
        - S09-exercise01.js 파일을 TypeScript의 파일로 변환
*/

// 1
class Car10_9 {
    public speed: number = 0;
    constructor(public name: string) {
        
    }

    public hook10_9(): void {
        console.log("부우우웅");
    };

    public accelerate10_9(speed) {
        this.speed = this.speed + speed;
    }
}

///////////////////////////////////////////
const car10_9: Car10_9 = new Car10_9('BENZ');
car10_9.hook10_9();
console.log(car10_9.speed);
car10_9.accelerate10_9(10);
console.log(car10_9.speed);


// 2
interface TsICar2 {
    tsHook(): void;
    tsAccelerate(speed: number): void;
    getSpeed(): number;
}

class TsCar2  implements TsICar2{
    private _speed: number = 0;

    constructor(private name: string) {
        
    }

    public tsHook(): void {
        console.log("부우우웅");
    };

    public tsAccelerate(speed) {
        this._speed = this._speed + speed;
    }

    public getSpeed():number {
        return this._speed;
    }
}

const tsCar2: TsICar2 = new TsCar2('BENZ');
tsCar2.tsHook();
console.log(tsCar2.getSpeed());
tsCar2.tsAccelerate(10);
console.log(tsCar2.getSpeed());

