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
var Parent9_81 = (function () {
    function Parent9_81(_name9_81, _age9_81) {
        var _this = this;
        this._name9_81 = _name9_81;
        this._age9_81 = _age9_81;
        this.printName = function () {
            console.log("\uC774\uB984\uC740 " + _this._name9_81 + " \uC785\uB2C8\uB2E4.");
        };
    }
    Parent9_81.prototype.print = function () {
        console.log("\uC774\uB984\uC740 " + this._name9_81 + " \uC774\uACE0, \uB098\uC774\uB294 " + this._age9_81 + " \uC0B4 \uC785\uB2C8\uB2E4.");
    };
    Parent9_81.prototype.printAge = function () {
        console.log("\uB098\uC774\uB294 " + this._age9_81 + " \uC0B4 \uC785\uB2C8\uB2E4.");
    };
    return Parent9_81;
}());
var Child9_81 = (function (_super) {
    __extends(Child9_81, _super);
    function Child9_81(age) {
        var _this = _super.call(this, 'Jerome Baek', age) || this;
        _this.printName();
        _this.printAge();
        return _this;
    }
    return Child9_81;
}(Parent9_81));
var p9_81 = new Child9_81(1);
