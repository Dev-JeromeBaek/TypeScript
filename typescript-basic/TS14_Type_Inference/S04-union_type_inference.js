/*
    ## Union Type Inference & Type Guard
        (유니온 타입과 타입 가드)
        - 타입 가드란?
            -
*/
function isPerson14_4(arg) {
    return arg.name !== undefined;
}
function hello14_4(arg) {
    if (isPerson14_4(arg)) {
        console.log(arg.name);
        // console.log(arg.brand);
    }
    else {
        // console.log(arg.name);
        console.log(arg.brand);
    }
}
