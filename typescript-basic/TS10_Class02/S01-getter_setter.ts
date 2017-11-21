/*
    ## 클래스와 getter, setter
        - 외부에서 getName(), setName()을 설정한다면
            _name, _age처럼 private 형태를 구분지어서 표현할
            필요가 없다고 생각.
*/

// 1
class Person10_1 {
    private _name: string = null;
    private _age: number = null;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        // 작업
        // this._name = `${name} Baek`;
        this._name = name;
    }
}

const person10_1: Person10_1 = new Person10_1('Jerome', 27);

console.log(person10_1.name);
person10_1.name = 'Jerome';
console.log(person10_1.name);

// 2
class Person10_12 {
    constructor(private _name: string, private _age: number) {

    }

    hello(): void {
        console.log(this._name);
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }
}

const person10_12: Person10_12 = new Person10_12('Jerome', 27);
person10_12.setName('Jerome');
console.log(person10_12.getName());

// 3
interface IPerson10_13 {
    getName(): string;
}
class Person10_13 implements IPerson10_13{
    constructor(private _name: string, private _age: number) {

    }

    hello(): void {
        console.log(this._name);
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }
}

const person10_13: IPerson10_13 = new Person10_13('Jerome', 27);
person10_13.setName('Jerome');    // 인터페이스에 setName()이 없기때문에 사용불가.
console.log(person10_13.getName());
