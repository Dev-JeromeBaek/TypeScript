/*
    ## Class Decorator Basic
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function hello13_2(constructorFn) {
    console.log(constructorFn);
}
function helloFactory13_2(show) {
    if (show) {
        return hello13_2;
    }
    else {
        return null;
    }
}
// @hello13_2
// @helloFactory13_2라는 어노테이션이 달린 class들은
// 전부 helloFactory13_2라는 함수를 추가시켜준다.
let Person13_2 = class Person13_2 {
    constructor() {
        console.log('new Person13_2()');
    }
};
Person13_2 = __decorate([
    helloFactory13_2(true)
], Person13_2);
new Person13_2();
/*
function hello13_2(construnctorFn: Function) {
    console.log(construnctorFn);
}

function helloFactory13_2(show: boolean) {
    if(show) {
        return hello13_2;
    } else {
        return null;
    }
}

@helloFactory13_2(true)
class Person13_2 {
    constructor() {

    }
}
*/
/*
    helloFactory13_2 는 팩토리 스타일
*/ 
