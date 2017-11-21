"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person10_4 = (function () {
    function Person10_4() {
        console.log(Person10_4.PROPERTY);
        Person10_4.METHOD();
    }
    Person10_4.METHOD = function () {
        console.log('프라이빗 메서드');
    };
    Person10_4.PROPERTY = '프라이빗 프로퍼티';
    return Person10_4;
}());
var PROPERTY = '모듈 내 함수';
function METHOD() {
    console.log('모듈 내 함수');
}
var Person10_42 = (function () {
    function Person10_42() {
        console.log(PROPERTY);
        METHOD();
    }
    return Person10_42;
}());
exports.Person10_42 = Person10_42;
