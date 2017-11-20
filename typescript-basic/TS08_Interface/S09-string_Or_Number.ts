/*
    ## Interface
        - string Or numner (indexable type)
*/

interface StringArray09 {
    [index: number]: string;
}

const sa91: StringArray09 = {};    // 옵셔널하다.
sa91[100] = '백';

interface StringDictionary09 {
    [index: string]: string;
}

const sd92: StringDictionary09 = {};    // 옵셔널하다.
sd92.hundred = '백';

interface StringArrayDiscionary09 {
    [index: number]: string;
    [index: string]: string;
}

const sad93: StringArrayDiscionary09 = {};
// 당연히 옵셔널하다.
sad93[100] = '백';
sad93.hundred = '백';