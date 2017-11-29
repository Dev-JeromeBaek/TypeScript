/*
    ## Union Type Inference & Type Guard 
        (유니온 타입과 타입 가드)
*/

interface Person14_4 {
    name: string;
    age: number;
}

interface Car14_4 {
    brand: string;
    wheel: number;
}

function isPerson14_4(arg: any): arg is Person14_4 {
    return arg.name !== undefined;
}

function hello14_4(arg: Person14_4 | Car14_4) {
    if (isPerson14_4(arg)) {
        console.log(arg.name);
        // console.log(arg.brand);
    } else {
        // console.log(arg.name);
        console.log(arg.brand);
    }
}