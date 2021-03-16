// let 키워드
// 읽거나 수정할 수 있음.
// 예)
let num = 1;
num = num * 3;
let str = '문자';
str = '다른 문자';
let arr = [];
arr = [1, 2, 3];
let obj = {};
obj = { name: '새 객체' };

// const 키워드
// 읽기만 가능함
// 예)
const num = 1;
num = 3; // error
const str = '문자';
str = '새 문자'; // error
const arr = [];
arr = [1, 2, 3]; // error
const obj = {};
obj = { name: '내 이름' }; // error

// 배열이나 객체를 불변 변수로 선언하고 자바스크립트 내장 함수로 값을 변경함.
// arr2, obj2 는 불변 변수. 자바스크립트 내장 함수(push, splice, ...) 사용해 값 변경.
// 예)
const arr2 = [];
arr2.push(1); // arr2 = [1];
arr2.splice(0, 0, 0); // arr2 = [0, 1]
arr2.pop(); // arr = [1]
const obj2 = {};
obj2['name'] = '내 이름'; // obj2 = { name: '내 이름'}
Object.assign(obj2, { name: '새이름' }); // obj2 = { name: '새이름' }
delete obj2.name; // obj2 = {}

// 참고!!! 불변 변수로 정의된 배열이나 객체를 내장 함수로 수정하는 것을 암묵적으로 금지하여 무결성 유지함!
