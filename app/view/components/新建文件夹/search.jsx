import React from 'react';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-box">
      <From />
      </div>
    );
  }
}
const arr=[];
const From=React.createClass({
  getInitialState:function(){
    return {value:''}
  },
  publish:function(e){
    e.preventDefault;
     this.setState(function(){
      const str=this.refs.ipt.value;
      let time=new Date();
          time=time.toLocaleString();
      var name='';
      var content='';
      const start=str.indexOf(" ");
      this.refs.ipt.value='';
      if(!str){
            alert('不要发空的信息啦!');
            return;
        }
      if( start !==-1){
        name=str.slice(0,start);
        content=str.slice(start+1,str.length)
      }else{
        name='张超';
        content=str
      }
      return arr.push({name:name,content:content,time:time});
    })
  },
  render:function(){

    const arrList=arr.map((x,index)=>{return <li key={'p'+index} className='clearfx'><img src="http://pic71.nipic.com/file/20150707/13559303_233732580000_2.jpg"  alt="百度图片"/><div>
    <p>名字：{x.name}</p><p>内容：{x.content}</p> <p>{x.time}</p></div></li>})
    return <div>
    <from><input type="text"  ref='ipt'  /><input type='submit' value="Search" onClick={this.publish} /></from>
    <div className="plist"><ul>{arrList}</ul></div>
    </div>
  }
})
