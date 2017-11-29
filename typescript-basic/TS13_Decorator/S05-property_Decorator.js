/*
    ## Property Decorator

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function writable13_5(canBeWrite) {
    return function (target, propName) {
        console.log(canBeWrite);
        console.log(target);
        console.log(propName);
        return {
            writable: canBeWrite
        };
    };
}
class Person13_5 {
    constructor() {
        this.name = 'Jerome';
        console.log('new Person13_5()');
    }
}
__decorate([
    writable13_5(false)
], Person13_5.prototype, "name", void 0);
const person13_5 = new Person13_5();
console.log(person13_5.name);
/*
undefined
*/ 
