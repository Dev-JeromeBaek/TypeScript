/*
    ## Interface
        - string index = optional property
*/

interface StringDictionary8_10 {
    [index: string]: string;
    name: string;
}

const sd8_101: StringDictionary8_10 = {
    name: '이름'    // 필수
};

sd8_101.any = 'any';    // 어떤 프로퍼티도 가능

////////////////////////////////////////

interface StringDictionaryNo8_10 {
    [index: string]: string;
    // name: number;    
    // (X) 인덱서블 타입이 string 값을 가지기 때문에
    // number를 필수로 끌어오면 에러.
}