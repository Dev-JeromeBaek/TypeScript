/*
    ## 클래스와 상속(1)
        - 1. 상속은 extends 키워드를 이용한다.
        - 2. 자식 클래스에서 디폴트 생성자는 부모의 생성자와 이력 형태가 같다.
*/
class Parent9_71 {
    constructor(_name9_71, _age9_71) {
        this._name9_71 = _name9_71;
        this._age9_71 = _age9_71;
        this.printName = () => {
            console.log(`이름은 ${this._name9_71} 입니다.`);
        };
    }
    print() {
        console.log(`이름은 ${this._name9_71} 이고, 나이는 ${this._age9_71} 살 입니다.`);
    }
    printAge() {
        console.log(`나이는 ${this._age9_71} 살 입니다.`);
    }
}
class Child9_71 extends Parent9_71 {
    constructor() {
        super(...arguments);
        this._name9_71 = 'Jerome Baek.';
    }
}
// const p9_71: Child9_71 = new Child9_71();    // (X)
const p9_71 = new Child9_71('', 5);
p9_71.print(); // 이름은 Jerome Baek. 이고, 나이는 5 살 입니다.
