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
var Parent9_4 = (function () {
    function Parent9_4() {
        this.privateProp9_41 = null;
        this.protectedProp9_41 = null;
    }
    return Parent9_4;
}());
var Child9_$ = (function (_super) {
    __extends(Child9_$, _super);
    function Child9_$() {
        var _this = _super.call(this) || this;
        _this.protectedProp9_41 = 'protected';
        return _this;
    }
    return Child9_$;
}(Parent9_4));
