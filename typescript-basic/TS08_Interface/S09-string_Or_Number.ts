/*
    ## Interface
        - string Or numner (indexable type)
*/

interface StringArray9 {
    [index: number]: string;
}

const sa9: StringArray9 = {};    // 옵셔널하다.
sa9[100] = '백';

interface StringDictionary9 {
    [index: string]: string;
}

const sd9: StringDictionary9 = {};    // 옵셔널하다.
sd9.hundred = '백';

interface StringArrayDiscionary9 {
    [index: number]: string;
    [index: string]: string;
}

const sad9: StringArrayDiscionary9 = {};
// 당엲 옵셔널하다.
sad9[100] = '백';
sad9.hundred = '백';