/*
    ## Boolean / boolean
        - 가장 기본적인 데이터 타입
        - 단순한 true 혹은 false값.
        - JavaScript / TypeScript에서 'boolean' 이라고 부른다.
        
    [주의]
        - 대소문자 구분.
        - 쓰는 방법의 차이가 있음.
*/

let isDone: boolean = flase;

typeof isDone === 'boolean'    // true

// Type 'boolean' is assignable to type 'Boolean'.
let isOk: Boolean = true;

// Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object.
// Perfer using 'boolean' when possible.
let isNotOk: boolean = new Boolean(true);
