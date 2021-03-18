// 전개 연산자(spread operator)
// 나열형 자료를 추출하거나 연결할 때 사용함.
// 사용 방법 : 배열이나 객체, 변수명 앞에 마침표 세 개(예 : ...변수명)를 입력함.
// 다만! 배열, 객체, 함수 인자 표현식([], {}, ()) 안에서만 사용해야함.

// Before
// var array1 = ['one', 'two'];
// var array2 = ['three', 'four'];
// var combined = [array1[0], array1[1], array2[0], array2[1]];
// var combined = array1.concat(array2);
// var combined = [].concat(array1, array2);
// var first = array1[0];
// var second = array1[1];
// var three = array1[2] || 'empty';
// function func() {
//   var args = Array.prototype.slice.call(this, arguments);
//   var first = args[0];
//   var others = args.slice(1, args.length);
// }

// After
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [...array1, ...array2];
const [first, second, three = 'empty', ...others] = array1;
function func(...args) {
  var [first, ...others] = args;
}
