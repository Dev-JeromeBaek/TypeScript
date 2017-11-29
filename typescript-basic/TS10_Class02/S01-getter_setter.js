/*
    ## 클래스와 getter, setter
        - 외부에서 getName(), setName()을 설정한다면
            _name, _age처럼 private 형태를 구분지어서 표현할
            필요가 없다고 생각.
*/
// 1
class Person10_1 {
    constructor(name, age) {
        this._name = null;
        this._age = null;
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        // 작업
        // this._name = `${name} Baek`;
        this._name = name;
    }
}
const person10_1 = new Person10_1('Jerome', 27);
console.log(person10_1.name);
person10_1.name = 'Jerome';
console.log(person10_1.name);
// 2
class Person10_12 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    hello() {
        console.log(this._name);
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
}
const person10_12 = new Person10_12('Jerome', 27);
person10_12.setName('Jerome');
console.log(person10_12.getName());
class Person10_13 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    hello() {
        console.log(this._name);
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
}
const person10_13 = new Person10_13('Jerome', 27);
person10_13.setName('Jerome'); // 인터페이스에 setName()이 없기때문에 사용불가.
console.log(person10_13.getName());
