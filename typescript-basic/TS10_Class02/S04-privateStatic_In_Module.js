"use strict";
/*
    ## 모듈에서 private static 프로퍼티 혹은 메서드
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Person10_4 {
    constructor() {
        console.log(Person10_4.PROPERTY);
        Person10_4.METHOD();
    }
    static METHOD() {
        console.log('프라이빗 메서드');
    }
}
Person10_4.PROPERTY = '프라이빗 프로퍼티';
/////////////////////////////////////////////////
const PROPERTY = '모듈 내 함수';
function METHOD() {
    console.log('모듈 내 함수');
}
class Person10_42 {
    constructor() {
        console.log(PROPERTY);
        METHOD();
    }
}
exports.Person10_42 = Person10_42;
