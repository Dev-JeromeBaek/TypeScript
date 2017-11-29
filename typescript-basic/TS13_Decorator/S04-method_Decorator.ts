/*
    ## Method Decorator
*/

function editable13_4(canBeEdit: boolean) {
    return function(target: any, propName: string, description: PropertyDescriptor) {
        console.log(canBeEdit);
        console.log(target);
        console.log(propName);
        console.log(description);
        description.writable = canBeEdit;
    }
}

class Person13_4 {
    constructor() {
        console.log('new Person13_4()');
    }

    @editable13_4(true)
    hello13_4() {
        console.log('hello');
    }
}

const p13_4 = new Person13_4();
p13_4.hello13_4();
p13_4.hello13_4 = function() {
    console.log('world');
}
p13_4.hello13_4();