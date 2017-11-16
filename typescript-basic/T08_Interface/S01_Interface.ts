
interface Person{
    name: string;
    age?: number;
}

const person: Person = {
    name: 'Jerome',
};

function hello(p: Person): void {
    console.log(`안녕하세요 ${p.name} 입니다.`);
}