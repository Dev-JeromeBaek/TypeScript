/*
    ## Class Decorator Advanced
    - 목표가 뚜렷한 decorator를 만들어 볼 것.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// hello13_3라는 어노테이션이 달린 클래스들은 
// 모두 hello13_3의 함수를 가짐.
function hello13_3(constructFn) {
    constructFn.prototype.hello13_3 = function () {
        console.log('hello');
    };
}
let Person13_3 = class Person13_3 {
};
Person13_3 = __decorate([
    hello13_3
], Person13_3);
const p13_3 = new Person13_3();
// p13_3.hello13_3();  // (X)
// 헬퍼를 줄때 위에 클래스에 없고 데코레이터를 통해 
// 만들어졌기 때문에 에러로 보여짐.
// 이를 강제적으로 적용시키기 위해 아래와 같은 
// 방법으로 함수를 일괄적으로 추가함..
// 이는 spring에서 사용하는 기법.
p13_3.hello13_3(); // AOP기법?
