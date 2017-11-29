/*
    ## Method Decorator
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable13_4(canBeEdit) {
    return function (target, propName, description) {
        console.log(canBeEdit);
        console.log(target);
        console.log(propName);
        console.log(description);
        description.writable = canBeEdit;
    };
}
class Person13_4 {
    constructor() {
        console.log('new Person13_4()');
    }
    hello13_4() {
        console.log('hello');
    }
}
__decorate([
    editable13_4(true)
], Person13_4.prototype, "hello13_4", null);
const p13_4 = new Person13_4();
p13_4.hello13_4();
p13_4.hello13_4 = function () {
    console.log('world');
};
p13_4.hello13_4();
