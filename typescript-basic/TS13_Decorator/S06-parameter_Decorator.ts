function print13_6(target: any, methodName: string, paramIndex: number) {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}

class Person13_6 {
    private _name: string;
    private _age: number;

    constructor(name: string, @print13_6 age: number) {
        this._name = name;
        this._age = age;
    }

    hello(@print13_6 msg: string) {
        console.log(msg);
    }
}

// const p13_6 = new Person13_6('Jerome', 27);

