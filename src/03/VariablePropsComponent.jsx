import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VariablePropsComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span>불리언 : {boolValue}</span>
        <span>숫자 : {numValue}</span>
        <span>배열 : {arrayValue}</span>
        <span>객체 : {String(objValue)}</span>
        <span>노드 : {nodeValue}</span>
        <span>함수 : {String(funcValue)}</span>
      </div>
    );
  }
}

VariablePropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.array,
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default VariablePropsComponent;
