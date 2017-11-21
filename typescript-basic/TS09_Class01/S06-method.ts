/*
    ## 클래스와 메서드
        - 1. 클래스 내부에 작성된 메서드는 public이 디폴트
        - 2. arrow function으로 작성 가능.
        - 3. private을 이용하면 클래스 외부에서 접근 불가.
*/

// 1
class Person9_61 {
    constructor(private _name9_61: string, private _age9_61: number) { }

    print(): void {
        console.log(`이름은 ${this._name9_61} 이고, 나이는 ${this._age9_61} 살 입니다.`);
    }

    printName = (): void => {
        console.log(`이름은 ${this._name9_61} 입니다.`);
    }

    private printAge(): void {
        console.log(`나이는 ${this._age9_61} 살 입니다.`);
    }
}

const person9_61: Person9_61 = new Person9_61('Jerome', 27);
person9_61.print();    // 이름은 Jerome 이고, 나이는 27 살 입니다.
person9_61.printName();    // 이름은 Jeromne 입니다.
// person9_61.printAge();    // (X)

// 2
class Person9_62 {
    protected _name9_62: string = 'Jerome';
    private _age9_62: number = null;

    constructor(name: string, age: number) {
        this._name9_62 = name;
        this._age9_62 = age;
    }

    hello(): void {
        console.log(this._name9_62);
    }
}
const person9_62: Person9_62 = new Person9_62('Jerome', 27);
person9_62.hello();

// 3
class Person9_63 {
    private _age9_63: number;
    // _name9_63 매개변수를 생성자를 통해 받을 때,
    // 초기에 선언 되어있지 않고 매개변수 받는 자리에 접근제어자를 걸어주면,
    // 받는 즉시 해당클래스에 새로운 변수를 만들어 저장 시켜준다.
    constructor(private _name9_63: string, age:number) {
        this._name9_63 = _name9_63;
        this._age9_63 = age;
    }
}

