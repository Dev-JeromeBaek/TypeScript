/*
    ## Basic Generic
        - 1. Generic 타입을 쓰지 않으면, T 로 추론
        - 2. Generic 타입을 쓰면, T 를 확인
*/

function TsHelloGeneric11_2<T>(message: T): T {
    return message;
}

function TsHello11_2<T>(message: T): T {
    return message;
}

console.log(TsHello11_2<string>('Jerome'));
let tAge11_21 = TsHello11_2(27);
TsHello11_2<number>('27');    // (X)

/*
function HelloGeneric<T>(message: T): T {
    return message;
}

function Hello<T>(message: T): T {
    return message;
}

console.log(Hello<string>('Jerome'));
let age = Hello(27);
Hello<number>('27');    // (X)

console.log(age);
*/