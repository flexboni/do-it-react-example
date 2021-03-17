import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

/**
 * 데이터 컴포넌트에서 필요한 데이터를
 * 스토어에서 추출하여 객체를 반환하는 역할
 * @param {*} state
 * @param {*} props
 */
const mapStateToProps = (state, props) => {
  return {
    userName: state.user.name,
    entity: state.collection.entities[props.id], // 데이터 컴포넌트에 프로퍼티로 전달된 id 값을 참조하여 자료 추출
  };
};

/**
 * 재사용 되는 컴포넌트의 프로퍼티에 전달해줌
 */
export default connect(mapStateToProps)(PresentationComponent);
