import React from 'react';


const tableArr=[{name:'张超1',age:'24',sex:'男', profession:'前端开发工程师',handle:'删除' },
                {name:'张超2',age:'24',sex:'男', profession:'前端开发工程师',handle:'删除' },
                {name:'张超3',age:'24',sex:'男', profession:'前端开发工程师',handle:'删除' },
                {name:'张超5',age:'24',sex:'男', profession:'前端开发工程师',handle:'删除' },
                {name:'张超6',age:'24',sex:'男', profession:'前端开发工程师',handle:'删除' },
                {name:'张超7',age:'24',sex:'男', profession:'前端开发工程师',handle:'删除' },
                {name:'张超8',age:'24',sex:'男', profession:'前端开发工程师',handle:'删除' }];


export default class Plist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Table />
      </div>
    );
  }
}
 class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: tableArr
    }
  }
  delItem(ele, index){

    const {list} = this.state
    let newList = [...list.slice(0, index), ...list.slice(index + 1)]

    this.setState({
      list: newList
    })

  } 
   addArr(){
    const {list} = this.state;
    const addList=[...list,{name:'张超11',age:'248',sex:'男', profession:'前端开发工程师',handle:'删除' }];
    this.setState(function(){
      return {list:addList}
    })
  }
   render(){
     const _this = this
    const { list } = this.state
    const trList = list.map(function(tr,index){
      return <tr key={'tr'+index}>
          <td>{ `index: ${index} ${tr.name}`}</td>
          <td>{tr.age}</td>
          <td>{tr.sex}</td>
          <td>{tr.profession}</td>
          <td>
            <button onClick={_this.delItem.bind(_this, tr, index)}>{tr.handle}</button>
          </td>
        </tr>
      });

    return <div>
    <table>
    <tbody><tr>
    <td>姓名</td><td>年龄</td><td>性别</td><td>职位</td>
    <td>操作</td></tr>{trList}</tbody>
    </table>
    <button onClick={this.addArr.bind(this)}>添加一条数据</button></div>
  }
  
}
