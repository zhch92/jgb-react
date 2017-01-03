import React from 'react';

export default class register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h3 style={{marginTop:'200px'}}>我是注册页面  你有什么想对我说的 ？</h3>
      <Register />
      </div>
    );
  }
}
const Register=React.createClass({
getInitialState() {
	return {
		liked:false,
		opacity:1.0
	}
},
componentDidMount() {
	   this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
},
handleClick(){
	this.setState({liked:!this.state.liked});
	console.log(this.state.liked)
},
render(){
	var text=this.state.liked ? 'liked' : 'dont liked'
	return ( <div style={{opacity: this.state.opacity}}> <p  onClick={this.handleClick}>{text}</p></div> )
}

})