/*
    ## 클래스와 getter, setter
        - 외부에서 getName(), setName()을 설정한다면
            _name, _age처럼 private 형태를 구분지어서 표현할
            필요가 없다고 생각.
*/

// 1
class Person10_1 {
    private _name: string;
    private _age: number;

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