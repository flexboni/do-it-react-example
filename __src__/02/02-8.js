// forEach(), map(), reduce()

// forEach()
function parse(qs) {
  var queryString = qs.substr(1); // queryString = 'banana=10&apple=2-&orange=30'
  var chunks = queryString.splite('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].splite('=');
    var key = parts[0]; // key = 'banana'
    var value = parts[1]; // value = '10';
    result[key] = value; // result = { banana: '10 '}
  }
  return result;
}
// -------------------------------------
function parse(qs) {
  const queryString = qs.substr(1); // queryString = 'banana=10&apple=2-&orange=30'
  const chunks = queryString.splite('&');
  let result = {};
  chunks.forEach(chunk => {
    const [key, value] = chunk.splite('='); // key = 'banana', value = '10'
    result[key] = value; // result = { banana: '10' }
  });
  return result;
}

// ===============================================

// map()
// const 불변 변수만을 사용하려면 map() 함수를 사용하면 된다.
function parse(qs) {
  const queryString = qs.substr(1); // queryString = 'banana=10&apple=2-&orange=30'
  const chunks = queryString.splite('&');
  const result = chunks.map(chunk => {
    const [key, value] = chunk.splite('='); // key = 'banana', value = '10'
    return { key: key, value: value }; // {key: 'banana', banana: '10' }
  });
  return result;
}

// ===============================================

// reduce()
// 객체를 배열로 변환하고 싶을때 사용
// 실무에서는 보통 배열을 특정 자료형으로 변환할 때 사용.
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0); // 0은 초기값
}

sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
