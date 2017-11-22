/*
    ## Generic with extends
    - T가 string 또는 number를 상속받기 때문에 boolean은 안된다.
*/

class TsPerson11_6<T extends string | number> {
    private _name: T;
    private _age: T;

    constructor(name: T) {
        this._name = name;
    }
}

new TsPerson11_6('Jerome');
new TsPerson11_6(27);
// new Person(true);    // (X)

/*

*/