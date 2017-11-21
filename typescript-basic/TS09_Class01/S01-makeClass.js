var Person9_11 = (function() {
    function Person9_11() {
        this.name = null;
        this.age = null;
    }
    return Person9_11;
}());
var person9_11 = new Person9_11();
console.log(person9_11);
person9_11.age = 27;
console.log(person9_11.name);
var Person9_12 = (function() {
    function Person9_12() {
        this.name = null;
        this.age = null;
    }
    return Person9_12;
}());
var person9_12 = new Person9_12();
person9_12.name = 'Jerome';
person9_12.age = 27;
var Person9_13 = (function() {
    function Person9_13(name) {
        this.name = null;
        this.age = null;
        this.name = name;
    }
    return Person9_13;
}());
var person9_13 = new Person9_13('Jerome');
person9_13.age = 27;