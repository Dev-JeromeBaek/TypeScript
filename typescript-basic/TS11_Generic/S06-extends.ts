/*
    ## Generic with extends
*/

class Person11_6<T extends string | number> {
    private _name: T;
    private _age: T;

    constructor(name: T) {
        this._name = name;
    }
}

new Person11_6('Jerome');
new Person11_6(27);
// new Person(true);    // (X)
// T가 string 또는 number를 상속받기 때문에 boolean은 안된다.

/*
class Person<T extends string | number> {
	private _name: T;
	private _age: T;

	constructor(name: T) {
		this._name = name;
	}
}
const a = new Person('Jerome');
const b = new Person(27);
// new Person(false);	(X)

console.log(a);
console.log(b);
*/