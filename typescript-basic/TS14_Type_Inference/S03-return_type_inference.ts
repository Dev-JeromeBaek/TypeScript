/*
    ## Return Type Inference (리턴 타입 추론)
*/
function hello14_3(msg: string | number) {
    if (msg === 'world') {
        return 'world';
    } else {
        return 0;
    }
}