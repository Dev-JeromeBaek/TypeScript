/*
    ## Exercise (2)
        - S10-exercise02.js 파일을 TypeScript의 파일로 변환
*/

var baseObject_JS = {
    width: 0,
    length: 0
};

var rectangle_JS = Object.create(baseObject_JS);
rectangle_JS.width = 8;
rectangle_JS.length = 6;
rectangle_JS.area = function() {
    return this.width * this.length;
};

console.log(rectangle_JS.area());