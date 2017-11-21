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
var ip7_71 = {
    name: 'Jerome',
    age: 27
};
var PersonImpl7_7 = (function () {
    function PersonImpl7_7() {
        this.name = null;
        this.age = null;
    }
    PersonImpl7_7.prototype.hello = function () {
        console.log('안녕하세요');
    };
    return PersonImpl7_7;
}());
var pi7_72 = new PersonImpl7_7();
pi7_72.hello();
var PersonChild7_7 = (function (_super) {
    __extends(PersonChild7_7, _super);
    function PersonChild7_7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PersonChild7_7;
}(PersonAlias7_7));
