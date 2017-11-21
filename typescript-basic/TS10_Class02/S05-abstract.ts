/*
    ## Abstract Class (미완성된 클래스)
        - 1. abstract 키워드가 사용된 클래스는 new로 생성할 수 없다.
        - 2. abstract 키워드가 사용된 클래스를 상속하면 
                abstract 키워드가 붙은 함수를 구현해야 한다.
*/

abstract class APerson10_5 {
    protected _name: string = 'Jerome';
    abstract setName(name: string): void;
}

class Person10_5 extends APerson10_5 {
    setName(name: string): void {
        this._name = name;
    }
}

// const person10_5 = new APerson10_5();    // (X)
const person10_5 = new Person10_5();