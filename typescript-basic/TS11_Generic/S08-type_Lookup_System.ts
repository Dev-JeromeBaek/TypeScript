/*
    ## Type Lookup System

*/

interface Person11_8 {
    name: string;
    age: number;
}

const person11_8: Person11_8 = {
    name: 'Jerome',
    age: 27
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

console.log(getProperty(person11_8, 'name'));
// console.log(getProperty(tsPerson11_8, fulllname));   // (X)
setProperty(person11_8, 'name', 'Jerome');
console.log(getProperty(person11_8, 'name'));
// setProperty(tsPerson11_8, 'name', 27);   // (X)

/*
    type alias와 keyof의 사용

    interface Person {
        name: string;
        age: number;
    }

    const a = 'name';

    type Test = keyof Person;
    // keyof Person의 결과가 리터럴타입의 결과물로나온다.
    // type Test = 'number'|'age'

    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
        obj[key] = value;
    }

    const person: Person = {
        name: 'Jerome',
        age: 27
    };

    console.log(getProperty(person, 'name'));
    setProperty(person, 'name', 'Jerome');
*/