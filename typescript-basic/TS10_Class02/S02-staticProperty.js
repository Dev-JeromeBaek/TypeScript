/*
    ## 클래스와 static 프로퍼티 => 클래스 멤버 변수
        - 1. static 키워드를 붙인 프로퍼티는 클래스.프로퍼티로 사용한다.
        - 2. static 프로퍼티에 private, protected를 붙이면 똑같이 동작한다.
        - 3. default proxy 설정에 사용을 많이함.
        - 4. class로 뭔가 할 때 static을 많이 사용하면 좋지 않다는 의미는 같음.
    
    - public static은 의미가 있음.
    - pivate에 static을 사용 한다는건 여러가지로의 의견이 있음.
*/
// 1
class Person10_2 {
    constructor(name, age) {
        this._name = null;
        this._age = null;
        this._name = name;
        this._age = age;
    }
    print() {
        console.log(`${this._name} ${Person10_2.lastName} in ${Person10_2.CITY}`);
    }
}
Person10_2.CITY = "";
Person10_2.lastName = 'Baek';
const person10_2 = new Person10_2('Jerome', 27);
Person10_2.CITY = 'Seoul';
person10_2.print(); // Jerome Baek in Seoul.
// 2
class Person10_22 {
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
Person10_22.HEIGHT = 160;
const person10_22 = new Person10_22('Jerome', 27);
Person10_22.HEIGHT;
