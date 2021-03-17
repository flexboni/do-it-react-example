import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent';

import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection, setAge } from '../actions/collectionActions';

/**
 * 데이터 컴포넌트가 스토어의 데이터를 변경할 수 있도록함
 */
// const mapDispatchToProps = dispatch => {
//   return {
//     setAge: (id, age) => dispatch(setAge(id, age)),
//   };
// };
// 인자로 받은 id, age를 그대로 전달하므로 dispatch 함수 생략 가능
const mapDispatchToProps = {
  setLoading,
  resetLoading,
  setUser,
  setCollection,
  setAge, // == setAge: setAge (키와 키 값이 같음)
};

export default connect(null, mapDispatchToProps)(ActionComponent);
