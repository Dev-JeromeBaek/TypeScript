var Person10_2 = (function () {
    function Person10_2(name, age) {
        this._name = null;
        this._age = null;
        this._name = name;
        this._age = age;
    }
    Person10_2.prototype.print = function () {
        console.log(this._name + " " + Person10_2.lastName + " in " + Person10_2.CITY);
    };
    Person10_2.CITY = "";
    Person10_2.lastName = 'Baek';
    return Person10_2;
}());
var person10_2 = new Person10_2('Jerome', 27);
Person10_2.CITY = 'Seoul';
person10_2.print();
var Person10_22 = (function () {
    function Person10_22(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Person10_22.prototype.hello = function () {
        console.log(this._name);
    };
    Person10_22.prototype.getName = function () {
        return this._name;
    };
    Person10_22.prototype.setName = function (name) {
        this._name = name;
    };
    Person10_22.HEIGHT = 160;
    return Person10_22;
}());
var person10_22 = new Person10_22('Jerome', 27);
Person10_22.HEIGHT;
