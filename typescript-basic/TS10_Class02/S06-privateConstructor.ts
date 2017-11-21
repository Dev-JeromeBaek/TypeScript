/*
    ## Class와 private constructor
        - 1. 생성자 함수 앞에 접근제어자인 private 을 붙일 수 있다.
        - 2. 외부에서 생성이 불가능하다.
*/

class Perference10_6 {
    private constructor() {

    }
}

const p10_6: Perference10_6 = new Perference10_6();    // (X)