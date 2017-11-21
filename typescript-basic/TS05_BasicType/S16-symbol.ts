/*
    ## Symbol
        - ECMAScript 2015의 Symbol.
        - 프리미티브 타입의 값을 담아서 사용.
        - 고유하고 수정 불가능한 값으로 만들어 주기 때문에,
            주로 접근을 제어하는데 쓰는 경우가 많다.
*/

let sym5_161 = Symbol5_161();
let obj5_161 = {
    [sym5_161]: "vlaue"
};

console.log(obj5_161[sym5_161]);    // "value"