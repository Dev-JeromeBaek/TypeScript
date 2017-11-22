/*
    ## Generic Class
        - 명시적으로 제네릭 타입을 설정하면 오류
*/

class TsPerson11_5<T> {
    private _name: T;
    private _age: number;

    constructor(name: T) {
        this._name = name;
    }
}

new TsPerson11_5('Jerome');
// new tPerson11_5<string>(27);    // (X)
