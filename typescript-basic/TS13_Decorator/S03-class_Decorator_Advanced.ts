/*
    ## Class Decorator Advanced
    - 목표가 뚜렷한 decorator를 만들어 볼 것.
*/

// hello13_3라는 어노테이션이 달린 클래스들은 
// 모두 hello13_3의 함수를 가짐.
function hello13_3(constructFn: Function) {
    constructFn.prototype.hello13_3 = function() {
        console.log('hello');
    }
}

@hello13_3
class Person13_3 {

}

const p13_3 = new Person13_3();
// p.hello13_3();  // (X)

// 헬퍼를 줄때 위에 클래스에 없고 데코레이터를 통해 만들어졌기 때문에 에러로 보여짐.
// 이를 강제적으로 적용시키기 위해 아래와 같은 방법으로 함수를 일괄적으로 추가함..
// 이는 spring에서 사용하는 기법.
(<any>p).hello13_3();   // AOP기법?