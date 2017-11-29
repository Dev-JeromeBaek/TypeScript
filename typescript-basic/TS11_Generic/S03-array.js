/*
    ## Generic Array
        - hello 함수의 제네릭 타입을 []를 이용하여 배열로 사용할 수 있음.
*/
function Hello11_3(messages) {
    return messages[0];
}
console.log(Hello11_3(['Hello', 'World']));
/*
function Hello<T>(messages: T[]): T {
    return messages[0];
}

console.log(Hello<string>(['Hello', 'World']));
*/ 
