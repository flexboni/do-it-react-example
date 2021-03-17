export default function reducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER': {
      return {
        ...state,
        ...payload, // 객체를 반환해야 하므로 전개 연산자(...)를 사용하여 이전 값과 새 값을 병합함
      };
    }
    default:
      return state;
  }
}
