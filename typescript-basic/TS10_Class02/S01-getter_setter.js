var Person10_1 = (function () {
    function Person10_1(name, age) {
        this._name = null;
        this._age = null;
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person10_1.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person10_1;
}());
var person10_1 = new Person10_1('Jerome', 27);
console.log(person10_1.name);
person10_1.name = 'Jerome';
console.log(person10_1.name);
var Person10_12 = (function () {
    function Person10_12(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Person10_12.prototype.hello = function () {
        console.log(this._name);
    };
    Person10_12.prototype.getName = function () {
        return this._name;
    };
    Person10_12.prototype.setName = function (name) {
        this._name = name;
    };
    return Person10_12;
}());
var person10_12 = new Person10_12('Jerome', 27);
person10_12.setName('Jerome');
console.log(person10_12.getName());
var Person10_13 = (function () {
    function Person10_13(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Person10_13.prototype.hello = function () {
        console.log(this._name);
    };
    Person10_13.prototype.getName = function () {
        return this._name;
    };
    Person10_13.prototype.setName = function (name) {
        this._name = name;
    };
    return Person10_13;
}());
var person10_13 = new Person10_13('Jerome', 27);
person10_13.setName('Jerome');
console.log(person10_13.getName());
