/*
    ## Generic Class
        - 명시적으로 제네릭 타입을 설정하면 오류
*/

class Person11_5<T> {
    private _name: T;
    private _age: number;

    constructor(name: T) {
        this._name = name;
    }
}

new Person11_5('Jerome');
// new tPerson11_5<string>(27);    // (X)

/*
class Person<T> {
	private _name: T;

	constructor(name: T) {
		this._name = name;
	}
}

const Jerome = new Person('Jerome');
new Person<number>(27);

console.log(Jerome);
*/