/*
    ## Generic Array
        - hello 함수의 제네릭 타입을 []를 이용하여 배열로 사용할 수 있음.
*/

function TsHello11_3<T>(messages: T[]): T {
    return messages[0];
}

console.log(TsHello11_3<string>(['Hello', 'World']));

/*
function Hello<T>(messages: T[]): T {
    return messages[0];
}

console.log(Hello<string>(['Hello', 'World']));
*/