import React from 'react';
import { Router, Route, Link ,hashHistory} from 'react-router'

export default class index extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1 style={{marginTop:'150px'}}>我是帮助页1</h1>
        <div><Link to="help/index1">跳转至帮助页2</Link></div>

         {this.props.children}

      </div>
    );
  }
}
