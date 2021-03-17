// 05-1 커링과 조합 개념 공부하기

// 커링 : 함수를 반환하는 함수
// 사용 이유? 함수 재활용 때문에!

// 예-1
function multiply(a, b) {
  return a * b;
}

// 재활용
function multiplyTwo(a) {
  return multiply(a, 2);
}

// 재활용 : n 배 구하기
function multiplyX(x) {
  return function (a) {
    return multiply(a, x);
  };
}

// n 배 구하기 다른 표현
const multiplyX = (x) => (a) => multiply(a, x);

// 'n 배 구하기 다른 표현' - 예제1
const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3);
const result2 = multiplyFour(3);

// 'n 배 구하기 다른 표현' - 예제1 다른표현
const result1 = multiplyX(3)(3);
const result2 = multiplyX(4)(3);

// 커링 응용
const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(a, x);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTow = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = (x) => addFour(multiplyThree(multiplyTwo(x)));
