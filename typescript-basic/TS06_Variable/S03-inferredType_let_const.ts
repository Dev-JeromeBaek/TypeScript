/*
    ## let과 const의 타입 추론
*/

let a: string = '에이';
let b: = '비';

const c: string = '씨';
const d = '디';

/*
    1. a는 명시적으로 지정된 타입인 string
    2. b는 타입추론에 의한 타입인 string
    3. c는 명시적으로 지정된 타입인 string
    4. d는 타입추론에 의한 타입인 리터럴타입 "디"
*/

