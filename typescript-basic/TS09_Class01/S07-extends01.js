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
var Parent9_71 = (function () {
    function Parent9_71(_name9_71, _age9_71) {
        var _this = this;
        this._name9_71 = _name9_71;
        this._age9_71 = _age9_71;
        this.printName = function () {
            console.log("\uC774\uB984\uC740 " + _this._name9_71 + " \uC785\uB2C8\uB2E4.");
        };
    }
    Parent9_71.prototype.print = function () {
        console.log("\uC774\uB984\uC740 " + this._name9_71 + " \uC774\uACE0, \uB098\uC774\uB294 " + this._age9_71 + " \uC0B4 \uC785\uB2C8\uB2E4.");
    };
    Parent9_71.prototype.printAge = function () {
        console.log("\uB098\uC774\uB294 " + this._age9_71 + " \uC0B4 \uC785\uB2C8\uB2E4.");
    };
    return Parent9_71;
}());
var Child9_71 = (function (_super) {
    __extends(Child9_71, _super);
    function Child9_71() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._name9_71 = 'Jerome Baek.';
        return _this;
    }
    return Child9_71;
}(Parent9_71));
var p9_71 = new Child9_71('', 5);
p9_71.print();
