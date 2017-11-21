var Person10_8 = (function () {
    function Person10_8(name) {
        this._name = null;
        this.age = 27;
        this._name = name;
    }
    Person10_8.prototype.setName = function (name) {
        this._name = name;
    };
    return Person10_8;
}());
var p10_8 = new Person10_8('Jerome');
console.log(p10_8.age);
p10_8.age = 27;
