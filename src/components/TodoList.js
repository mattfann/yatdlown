import React, {Component}from 'react'


class TodoList extends Component{
    constructor (props){
        super(props)
        this.state = {
            'todo' :'',
            'list' :[]
        }
        this.complete = false;

    }
    updateInput(key,value){
        this.setState({
            [key]: value
        })
    }
        addItem(){
            const todo = {
                id: 1 + Math.random(),
                value: this.state.todo.slice()  
            }
            const list =[...this.state.list];
            list.push(todo)
            this.setState({
                list,
                todo:''
            })

        }
        clearItems(){
            this.setState({...this.state.list =[]})
        }
    render(){
        return (
            <div>
        <h1>Yet Another Todo List!</h1>
        <input type='text' placeholder='' value ={this.state.todo} onChange={e =>this.updateInput("todo", e.target.value)}></input>
        <button onClick ={()=> this.addItem()}>Save</button>
        <button onClick ={()=> this.clearItems()}>Clear</button>
        <br/>
        <p>
            {this.state.list.map(item=>{
                return (
                <div>
                <input type='checkbox' id={item.id} name={item.id}/>  <label for={item.id}>{item.value}</label><br/>
                </div>
                )
            })}
            </p>
      
        </div>)


    }
}
//  <li key ={item.id}

export default TodoList