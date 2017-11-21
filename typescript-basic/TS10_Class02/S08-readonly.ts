/*
    ## Class와 readonly
        - 1. private readonly로 선언된 경우, 생성자에서는 할당이 가능하다.
        - 2. private readonly로 선언된 경우, 생성자 이외에서는 할당이 불가능하다.
        - 3. public readonly로 선언된 경우, 클래스 외부에서는 다른값을 할당할 수 없다.
        - 4. 마치 getter만 있는 경우와 같다.
*/

class Person10_8 {
    private readonly _name: string = null;
    public readonly age: number = 27;

    constructor(name: string) {
        this._name = name;
    }

    public setName(name: string) {
        this._name = name;    // (X)
    }
}

const p10_8: Person10_8 = new Person10_8('Jerome');
console.log(p10_8.age);
p10_8.age = 27;    // (X)
