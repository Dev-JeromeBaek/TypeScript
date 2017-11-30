/*
    ## Parameter Decorator
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function print13_6(target, methodName, paramIndex) {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}
let Person13_6 = class Person13_6 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    hello(msg) {
        console.log(msg);
    }
};
__decorate([
    __param(0, print13_6)
], Person13_6.prototype, "hello", null);
Person13_6 = __decorate([
    __param(1, print13_6)
], Person13_6);
// const p13_6 = new Person13_6('Jerome', 27);
