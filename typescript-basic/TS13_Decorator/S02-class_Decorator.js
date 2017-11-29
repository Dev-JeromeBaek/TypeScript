var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function hello13_2(construnctorFn) {
    console.log(construnctorFn);
}

function helloFactory13_2(show) {
    if (show) {
        return hello13_2;
    } else {
        return null;
    }
}
let Person13_2 = class Person13_2 {
    constructor() {}
};
Person13_2 = __decorate([
    helloFactory13_2(true)
], Person13_2);
/*
    helloFactory13_2 는 팩토리 스타일
*/