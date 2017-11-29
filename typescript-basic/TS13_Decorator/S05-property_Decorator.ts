/*
    ## Property Decorator

*/

function writable13_5(canBeWrite: boolean) {
    return function(target: any, propName: string): any {
        console.log(canBeWrite);
        console.log(target);
        console.log(propName);
        return {
            writable: canBeWrite
        }
    }
}

class Person13_5 {
    @writable13_5(false)
    name: string = 'Jerome';

    constructor() {
        console.log('new Person13_5()');
    }
}

const person13_5 = new Person13_5();
console.log(person13_5.name);

/*
undefined
*/