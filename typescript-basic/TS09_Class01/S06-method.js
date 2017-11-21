var Person9_61 = (function () {
    function Person9_61(_name9_61, _age9_61) {
        var _this = this;
        this._name9_61 = _name9_61;
        this._age9_61 = _age9_61;
        this.printName = function () {
            console.log("\uC774\uB984\uC740 " + _this._name9_61 + " \uC785\uB2C8\uB2E4.");
        };
    }
    Person9_61.prototype.print = function () {
        console.log("\uC774\uB984\uC740 " + this._name9_61 + " \uC774\uACE0, \uB098\uC774\uB294 " + this._age9_61 + " \uC0B4 \uC785\uB2C8\uB2E4.");
    };
    Person9_61.prototype.printAge = function () {
        console.log("\uB098\uC774\uB294 " + this._age9_61 + " \uC0B4 \uC785\uB2C8\uB2E4.");
    };
    return Person9_61;
}());
var person9_61 = new Person9_61('Jerome', 27);
person9_61.print();
person9_61.printName();
var Person9_62 = (function () {
    function Person9_62(name, age) {
        this._name9_62 = 'Jerome';
        this._age9_62 = null;
        this._name9_62 = name;
        this._age9_62 = age;
    }
    Person9_62.prototype.hello = function () {
        console.log(this._name9_62);
    };
    return Person9_62;
}());
var person9_62 = new Person9_62('Jerome', 27);
person9_62.hello();
var Person9_63 = (function () {
    function Person9_63(_name9_63, age) {
        this._name9_63 = _name9_63;
        this._name9_63 = _name9_63;
        this._age9_63 = age;
    }
    return Person9_63;
}());
