/*
    ## 클래스와 상속(2)
        - 1. 생성자를 정의하고, this를 사용하려면, super()를 통해 부모의 생성자를 호출해 주어야 한다.
        - 2. super()를 호출할 때는 부모 생성자의 입력 타입이 같아야 한다.
        - 3. super()를 호출하는 것은 클래스 외부에서 호출하는 것과 같다.
        - 4. protected 함수를 호출해서 그 안의 private를 출력하는 것에 주의한다.
*/
class Parent9_81 {
    constructor(_name9_81, _age9_81) {
        this._name9_81 = _name9_81;
        this._age9_81 = _age9_81;
        this.printName = () => {
            console.log(`이름은 ${this._name9_81} 입니다.`);
        };
    }
    print() {
        console.log(`이름은 ${this._name9_81} 이고, 나이는 ${this._age9_81} 살 입니다.`);
    }
    printAge() {
        console.log(`나이는 ${this._age9_81} 살 입니다.`);
    }
}
class Child9_81 extends Parent9_81 {
    constructor(age) {
        // 자식클래스에도 생성자가 있는 경우
        super('Jerome Baek', age);
        // 부모 클래스의 인턴스를 할당받아 처리할 수 있다.
        this.printName();
        this.printAge();
    }
}
const p9_81 = new Child9_81(1);
// 이름은 Jerome Baek 입니다.
// 나이는 1 살 입니다. 
