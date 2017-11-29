/*
    ## Generic with multiple types
        - Generic 타입 여러개 지정하기
*/

class Person11_7<T, K> {
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

const p11_7 = new Person11_7('Jerome', 27);
console.log(p11_7.getName());
console.log(p11_7.getAge());

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