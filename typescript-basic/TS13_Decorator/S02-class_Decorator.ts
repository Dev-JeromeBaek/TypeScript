/*
    ## Class Decorator Basic
*/
/*
function hello13_2(constructorFn: Function) {
    console.log(constructorFn);
}

function helloFactory13_2(show: boolean) {
    if (show) {
        return hello13_2;
    } else {
        return null;
    }
}

// @hello13_2
@helloFactory13_2(true)
class TsPerson13_2 {
    constructor() {
        console.log('new TsPerson13_2()');
    }
}
new TsPerson13_2();
*/
function hello13_2(construnctorFn: Function) {
    console.log(construnctorFn);
}

function helloFactory13_2(show: boolean) {
    if(show) {
        return hello13_2;
    } else {
        return null;
    }
}

@helloFactory13_2(true)
class Person13_2 {
    constructor() {

    }
}
/*
    helloFactory13_2 는 팩토리 스타일
*/