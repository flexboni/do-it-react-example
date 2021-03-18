import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 문자열형 프로퍼티 사용하기
 */
class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

// 자료형을 선언하는 예제 : prop-types 사용!
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
