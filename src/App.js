import React, { Component } from 'react';
import VariablePropsComponent from './03/VariablePropsComponent';

class App extends Component {
  render() {
    const array = [1, 2, 3];
    const obj = { name: '제목', age: 30 };
    const node = <h1>node</h1>;
    const func = () => {
      console.log('message');
    };

    return (
      <div className="body">
        <VariablePropsComponent
          boolValue={true}
          numValue={1}
          arrayValue={array}
          objValue={obj}
          nodeValue={node}
          funcValue={func}
        />
      </div>
    );
  }
}

export default App;
