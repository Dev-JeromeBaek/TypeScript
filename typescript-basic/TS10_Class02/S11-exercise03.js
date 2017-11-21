/*
    ## Exercise (3)
        - S11-exercise03.js 파일을 TypeScript의 파일로 변환
*/

var person_JS = {
    _firstName: ""
};

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// ES5 이상
Object.defineProperty(person_JS, "firstName", {
    get: function() {
        return this._firstName;
    },
    set: function(value) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});

console.log(person_JS.firstName);
person_JS.firstName = "Ma";
console.log(person_JS.firstName);
person_JS.firstName = "Maximilian";
console.log(person_JS.firstName);