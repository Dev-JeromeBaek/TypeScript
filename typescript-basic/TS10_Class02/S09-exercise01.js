/*
    ## Exercise (1)
        - S09-exercise01.js 파일을 TypeScript의 파일로 변환
*/

function JsCar(name) {
    this.name = name;
    this.speed = 0;

    this.jsHonk = function() {
        console.log("부우우웅");
    };

    this.jsAccelerate = function(speed) {
        this.speed = this.speed + speed;
    }
}


//////////////////////////////////
var jsCar = new JsCar("BENZ");
jsCar.jsHonk();
console.log(jsCar.speed);
jsCar.jsAccelerate(10);
console.log(jsCar.speed);