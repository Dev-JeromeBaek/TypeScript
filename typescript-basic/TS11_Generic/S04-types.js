/*
    ## Generic Types
        - 구현체에 return T를 설정하지 않아도,
            return false 시 오류가 나지 않는다?
*/
const hello11_4 = (message) => {
    return message;
};
console.log(hello11_4('Hello').length);
/*
type HelloGeneric = <T>(message: T) => T;

const Hello: HelloGeneric = <T>(message: T): T => {
    return message;
}

console.log(Hello<string>('Hello').length);
*/ 
