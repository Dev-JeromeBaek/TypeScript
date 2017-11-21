var Person9_2 = (function () {
    function Person9_2() {
        this.name = null;
        this.age = null;
        console.log(this.name === null);
        console.log(this.name === undefined);
    }
    return Person9_2;
}());
var person9_2 = new Person9_2();
person9_2.name = 'Jerome';
person9_2.age = 27;
console.log(person9_2);
var Person9_22 = (function () {
    function Person9_22() {
        this.name = 'Jerome';
        this.age = 27;
        console.log(this.name);
    }
    return Person9_22;
}());
var person9_22 = new Person9_22();
console.log(person9_22);
