var Preference10_7 = (function () {
    function Preference10_7() {
    }
    Preference10_7.getInstance = function () {
        if (Preference10_7.instance === null) {
            Preference10_7.instance = new Preference10_7();
        }
        return Preference10_7.instance;
    };
    Preference10_7.instance = null;
    return Preference10_7;
}());
var p10_7 = Preference10_7.getInstance();
var Person10_72 = (function () {
    function Person10_72() {
    }
    Person10_72.getInstance = function () {
        if (Person10_72.Instance === null) {
            Person10_72.Instance = new Person10_72();
        }
        return Person10_72.Instance;
    };
    Person10_72.prototype.hello = function () {
    };
    Person10_72.Instance = null;
    return Person10_72;
}());
var p10_72 = Person10_72.getInstance();
p10_72.hello();
