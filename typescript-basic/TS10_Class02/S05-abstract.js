var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var APerson10_5 = (function () {
    function APerson10_5() {
        this._name = 'Jerome';
    }
    return APerson10_5;
}());
var Person10_5 = (function (_super) {
    __extends(Person10_5, _super);
    function Person10_5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person10_5.prototype.setName = function (name) {
        this._name = name;
    };
    return Person10_5;
}(APerson10_5));
var person10_5 = new Person10_5();
