/*
    ## Symbol.iterator
        - 프로퍼티이며, 함수가 구현되어있으면, iterable 이라고 한다.
        - Array, Map, Set, String, Int32Array, Uint32Array, etc.
            에는 내장된 구현체가 있으므로 이터러블 하다.
        - 그냥 객체는 이터러블하지 않다.
        - 이터레이터를 통해 이터러블한 객체의 Symbol.iterator 함수를 호출한다.
        
        - target : es3 or es5
            - Array 에만 for..of 사용 가능
            - 일반 객체에 사용하면 오류
        - target : es6
            - Sumbol.iterator 함수를 구현하면 어떤 객체에도 for..of 사용 가능
*/
// lib.es6.d.ts
/*
interface IteratorResult<T> {
    done: boolean;
    value: T;
}
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}
interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}
interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
}
*/
// Custom Iterable
/*
class CustomIterable implements Iterable<string> {
    private _array: Array<string> = ['first', 'second'];
    [Symbol.iterator]() {
        var nextIndex = 0;
        return {
            next: () => {
                return {
                    value: this._array[nextIndex++],
                    done: nextIndex < this._array.length
                }
            }
        }
    }
}
const cIterable = new CustomIterable();
for (const item in cIterable) {
    console.log(item);
}
*/ 
