// typeof add === 'function'
// 함수 이름 있음.
function add(first, second) {
  return first + second;
}

// typeof add === 'function'
// 함수 이름 없음.
var add = function(first, second) {
  return first + second;
};

// -----------------------------------------------

var add = (first, second) => {
  return first + second;
};

var add = (first, second) => first + second;

var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });

// -------------------------------------------------

function addNumber(num) {
  return function(value) {
    return num + value;
  };
}

// 다른 방식으로 같은 표현
var addNumber = num => value => num + value;

// -------------------------------------------------

class MyClass {
  value = 10;

  constructor() {
    var addThis2 = function(first, second) {
      return this.value + this.second;
    }.bind(this); // 콜백 함수의 this 범위로 생기는 오류를 피하기 위해 bind() 함수를 사용하여 this 객체 전달

    var addThis3 = (first, second) => this.value + this.second; // 화살표 함수이므로 이 과정이 생략됨.
  }
}
