var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value'; // 연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성해야함.
var obj2 = {
  methodA: function() {
    // 객체에 함수를 추가할 대는 변수에 함수를 할당해야함.
    console.log('method A');
  },
};

// -----------------------------------------------------

var obj = { x, y }; // key 생략 시 자동으로 value 가 key가 됨.
var combined = {
  ['one' + randomKeyString]: 'some value', // 대괄호를 사용하면 계산된 키값을 생성할 수 있음.
};
var obj2 = {
  methodA() {
    console.log('method A'); // function 키워드를 생략하여 함수를 선언할 수 있음.
  },
};

// -----------------------------------------------------

var list = [0, 1];
var item2 = list[2] || -1; // 인덱스에 값이 없으면 기본값으로 할당함.

// -----------------------------------------------------

var list = [0, 1];
var [
  item1, // 0번째 인덱스에 변수 배치
  item2,
  item3 = -1, // 기본값 설정
] = list;
[item2, item1] = [item1, item2]; // 두 배열 치환함
var {
  key1: newKey1, // 콜론 부호와 함께 새 변수명을 선언하여 추출된 키값을 다른 변수명으로 할당함.
  key2,
  key3 = 'default key3 value',
} = obj;

// -----------------------------------------------------

var [item1, ...otherItems] = [0, 1, 2]; // 0번째 인덱스 값을 item1에 추출, 나머지는 otherItems에 할당
var { key1, ...others } = { key1: 'one', key2: 'two' };
