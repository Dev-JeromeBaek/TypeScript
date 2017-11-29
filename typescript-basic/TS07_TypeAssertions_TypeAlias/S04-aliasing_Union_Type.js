/*
    ## Aliasing Union Type
        - 1. 유니온 타입은 A도 가능하고 B도 가능한 타입.
        - 2. 길게 쓰는걸 짧게
*/
// 기본 예시
let person7_11 = 0;
person7_11 = 'Jerome';
let another7_11 = 0;
another7_11 = 'Jerome';
// aliasing 적용 전
let a7_11 = null;
let b7_11 = null;
// b7_1: string이나 number만 들어갈 수 있음.
b7_11 = 'string';
b7_11 = 0;
function test7_11(arg) {
    return arg;
}
// 위 코드처럼 작성할 수 있지만, 여기서 aliasing을 적용해 보면
// 아래 코드처럼 간결하게 표현할 수 있다.
// aliasing 적용 후
let a7_12;
let b7_12;
b7_12 = 'string';
b7_12 = 0;
function test7_12(arg) {
    return arg;
}
