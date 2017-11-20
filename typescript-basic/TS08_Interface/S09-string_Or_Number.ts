/*
    ## Interface
        - string Or numner (indexable type)
*/

interface StringArray8_9 {
    [index: number]: string;
}

const sa8_91: StringArray8_9 = {};    // 옵셔널하다.
sa8_91[100] = '백';

interface StringDictionary8_9 {
    [index: string]: string;
}

const sd8_92: StringDictionary8_9 = {};    // 옵셔널하다.
sd8_92.hundred = '백';

interface StringArrayDiscionary8_9 {
    [index: number]: string;
    [index: string]: string;
}

const sad8_93: StringArrayDiscionary8_9 = {};
// 당연히 옵셔널하다.
sad8_93[100] = '백';
sad8_93.hundred = '백';