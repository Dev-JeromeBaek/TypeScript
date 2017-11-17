/*
    ## Undefined & Null
        - TypeScript에서 'undefined'와 'null'은 
            실제로 각각 'undefined'와 'null'이라는 고유한 타입을 가진다.
        - 'void'와 마찬가지로, undefined와 null은 그 자체로는 쓸모가 없다.
        - 둘다 소문자만 존재.
*/

// 이 변수들에 할당할 수 있는 것들은 거의 없다.

let u: undefined = undefined;
let n: null = null;


/*
    ## undefined & null are subtypes of all other type.
        - 기본 설정이 그렇듯 이 둘은 모든 타입의 하위타입.
        - number에 null또는 undefined를 할당할 수 있다는 의미.
        - 하지만, 컴파일 옵션에서 `--strictNullChecks`사용하면,
            null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
            - 이 경우, null과 undefined를 할당할 수 있게 하려면,
                union type을 이용해야 함.
*/

let name: string = null;
let age: number = undefined;

// strictNullChecks => true
// Type 'null' is not assignable to type 'string'.
let name: string = null; (X)

// null => null || void, undefined => undefined || void
// Type ' null' is not assignable to type 'undefined'.
let u: undefined = null;    // (X)

let v: void = undefined;    // (O)

let union: string | null | undefined = 'str';