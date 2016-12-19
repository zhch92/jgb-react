import React from 'react'


const todoInit = [{
	id:1,
	name:'chenhuan',
	des:'nimeid'
},{
	id:2,
	name:'chenhuan',
	des:'nimeid'
},{
	id:3,
	name:'chenhuan',
	des:'nimeid'
},{
	id:4,
	name:'chenhuan',
	des:'nimeid'
},{
	id:5,
	name:'chenhuan',
	des:'nimeid'
}]
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	todo: todoInit
    }
  }

  render() {
  	const {todo} = this.state;
  	const {title} = this.props

    return (
      <div className="todo-box">
      	<h2>{title}</h2>
		{todo.map((ele, index) => {
			const {id, name, des} = ele;

			return (
				<div  key={index +　'index'} className="item">
					{`${id}. ${name} -> ${des} ${index}`}

					<button onClick={()=>{
						const newTodo = [...todo.slice(0, index), ...todo.slice(index + 1)];
						this.setState({
							todo: newTodo
						})
					}}>
						remove
					</button>
				</div>
			)
		} )}

		<button onClick={()=>{
			const {todo} = this.state;
			const newTodo = [...todo, {
				id: 6,
				name:'add item',
				des: 'this is my add item todo'
			}]

			this.setState({
				todo: newTodo
			})
		}}>
			add todo
		</button>
      </div>
    );
  }
}


Todo.defaultProps = {
	title: 'todo init title'
}





