/*
    ## Type Guard(타입 가드)
        - Type guard는 다른 언어에서 보기 힘든 TypeScript만의 독특한 기능으로,
            타입 인트로스펙션을 통해 분기한 블록 안에서 해당 변수의 타입을 한정시켜주는 기능을 말한다.

        - TypeScript를 사용하다 보면, 하나의 변수가 2개 이상의
            타입일 가능성이 있는 경우가 자주 생긴다.
            TypeScript의 본질이 JavaScript이고
            이는 동적 타입 언어이기 때문일 것이다.
            이를 위해서 TypeScritp는 any 타입을 이용하거나,
            조금 더 안전한 사용을 위해서 유니언 타입을 이용한다.
            하지만 유니언 타입의 값은 그 값이 될 수 있는 모든 타입이
            공통으로 가지는 함수와 프로퍼티만 이용할 수 있고,
            모든 타입이 들어갈 수 있는 함수에만 사용 사용할 수 있다.
            이런 불편함을 없애기 위해서 나온 기능이 type guard이다.
*/
function type_guard_example14_5(arg) {
    if (typeof arg === 'string') {
        return arg.substring(0, 3);
    } else if (arg instanceof Array) {
        return arg.join().substring(0, 5);
    } else {
        return arg.toString();
    }
}
/*
    type_guard_example14_5처럼 여러 개의 타입이 될 수 있는
    값을 사용하기 전에 인트로스펙션을 이용해서
    타입을 확인하고 값을 사용하는 것은
    JavaScript에서 볼 수 있는 흔한 패턴이다.
    이렇게 타입을 확인하고 나면, 확인한 블록 안에서
    그 값은 해당하는 타입이 되는 것이 type guard이다.

    하지만 아직 모든 인트로스펙션에 대해서
    type guard가 적용되는 것은 아니다.
    현재 type guard가 적용되는 경우는
    인트로스펙션이 조건문에 들어가는 if 블록과
    그에 따라오는 else 블록뿐이다.
*/
function type_guard_example15_51(arg) {
    if (typeof arg === 'string' || arg instanceof Array) {
        return arg.length; // arg: string | string[]
    }
    return arg; // if block 밖이라서 type guard가 적용되지 않는다.
}
/*
    type_guard_example15_51의 예제처럼 if 블록이 반드시 return 하여
    그다음은 else 블록과 다를 바 없는 경우에는 type guard가 적용되지 않는다.

    게다가 모든 인트로스펙션이 가능한 것도 아니고,
    instanceof를 사용하는 경우와 typeof의 결과가
    'number', 'string', 'boolean'이 되는 경우뿐이다.
    그래서 underscore 등을 이용해서 타입 체킹을 하는 경우나
    인트로스펙션 부분을 함수로 뺀 경우는 type guard가 동작하지 않는다.
    이는 TypeScript 1.6에 계획된 type guard function이 들어오면
    해결될 문제지만, 아직은 어쩔 수 없다.
*/