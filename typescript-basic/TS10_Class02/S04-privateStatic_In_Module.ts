/*
    ## 모듈에서 private static 프로퍼티 혹은 메서드
*/

class Person10_4 {
    private static PROPERTY = '프라이빗 프로퍼티';
    private static METHOD() {
        console.log('프라이빗 메서드');
    }
    constructor() {
        console.log(Person10_4.PROPERTY);
        Person10_4.METHOD();
    }
}


/////////////////////////////////////////////////

const PROPERTY = '모듈 내 함수';
function METHOD() {
    console.log('모듈 내 함수');
}

export class Person10_42 {
    constructor() {
        console.log(PROPERTY);
        METHOD();
    }
}