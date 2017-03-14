import React from 'react';

export default class register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>

    );
  }
}

const Welcome=React.createClass({
  render(){
     return <h1>Hello, {props.name}</h1>;
  }
})