import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
    constructor(){
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "the first todo"
                },{
                    id: 2,
                    title: "the second todo2"
                }
                ]
        };
        
    }
    
    handleNewTodo(event){
        event.preventDefault();
        
        let tempState = this.state;
        
        tempState.todos.push({id: (Math.round(Math.random()*10)), title: event.target[0].value});
        
        this.setState(tempState); 
        event.target[0].value = "";
        
        return false;
    }
    handleDelete (event){
        let tempState = this.state;
        this.setState(
            {
            todos : tempState.todos.filter(todos => todos.id !== parseInt(event.target.id))
            }
        );
    }
    
    render(){
        
        var todos = this.state.todos.map( (element) => {
            
            return(
               <li key={element.id} id={element.id} onClick={this.handleDelete.bind(this)}>
                    {element.title}
                </li>
                );
        })
        
        return (
            <div className="text-center mt-5">
                <h1>To Do List</h1>
                <form onSubmit={this.handleNewTodo.bind(this)}>
                    <input type="text" placeholder="Enter Task Here" name="todoInput" />
                </form>
                <ul id="mainList">
                    {todos}
                </ul>
            </div>
        );
    }
}