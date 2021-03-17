const initState = false; // 초기값 따로 설정하기

// 초기값 기본값으로 전달
export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_LOADING': {
      return payload; // 전달받은 loading을 바로 반환
    }
    case 'RESET_LOADING': {
      return initState; // 초기값 반환
    }
    default:
      return state;
  }
}
