/*
    ## Exercise (1)
        - S09-exercise01.js 파일을 TypeScript의 파일로 변환
*/

// 1
class TsCar {
    public speed: number = 0;
    constructor(public name: string) {
        
    }

    public tsHook(): void {
        console.log("부우우웅");
    };

    public tsAccelerate(speed) {
        this.speed = this.speed + speed;
    }
}

///////////////////////////////////////////
const tsCar: TsCar = new TsCar('BENZ');
tsCar.tsHook();
console.log(tsCar.speed);
tsCar.tsAccelerate(10);
console.log(tsCar.speed);


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

