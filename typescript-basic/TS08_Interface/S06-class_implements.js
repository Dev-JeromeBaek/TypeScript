var Person8_6 = (function () {
    function Person8_6(name) {
        this.name = null;
        this.name = name;
    }
    Person8_6.prototype.hello8_6 = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    };
    Person8_6.prototype.hi8_6 = function () {
        console.log("\uC548\uB155 " + this.name + " \uC784.");
    };
    return Person8_6;
}());
var person8_61 = new Person8_6('Jerome');
person8_61.hello8_6();
person8_61.hi8_6();
