import React from 'react';
const initArr=[];
export default class From extends React.Component {
  constructor(props) {
    super(props);
    this.state={textList:initArr};
  }
  commit(){
    
    const {textList} = this.state;
    let text=this.refs.text.value;
    let name='zhch';
    const val=text.indexOf(' ');
    if (val!==-1) {
      name=text.slice(0,val);
      text=text.slice(val+1,text.length);
    } 
    let newTextList=[...textList,{name:name,tex:text}];

    this.setState({
       textList:newTextList
    })
  }
  render() {
    const {textList} = this.state
    const list=textList.map(function(li,index){
        return <li key={'li'+index}>名字是：{li.name}------{li.tex}</li>
      })
    return (
      <div>
      	<from>
      		<input type='text' ref='text' /><input type='submit' value='提交' onClick={this.commit.bind(this)}	/>
      	</from>
        <ul>
        {list}
        </ul>
      </div>
      
    );
  }
}
 class Subt extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    );
  }
}



