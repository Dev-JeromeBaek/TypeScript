/*
    ## Generic with multiple types
        - Generic 타입 여러개 지정하기
*/

class TsPerson11_7<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }

    getName(): T {
        return this._name;
    }

    getAge(): K {
        return this._age;
    }
}

const tsPerson11_7 = new TsPerson11_7('Jerome', 27);
console.log(tsPerson11_7.getName());
console.log(tsPerson11_7.getAge());

/*
class Person<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Person('Jerome', 27);
*/