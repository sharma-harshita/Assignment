import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import  * as todoActions from '../redux/actions/todoActions'

class Question2 extends Component{

  constructor(props){
    super(props)
    this.state={
      name:"",
      totalTask:0,
      totalCompletedTask:0,
      isEditable:false
    }
  }

  handleChange=(event)=>{
    this.setState({name:event.target.value})
  }

  handleSubmit =(event)=>{
    event.preventDefault()
    this.setState({name:""})
    this.props.createTodo(this.state.name)
  }

  deleteTask(event, id){
    event.preventDefault()
    this.props.deleteTodo(id)
  }

  completeTask(event, id){
    event.preventDefault()
    this.props.completeTodo(id)
    this.countCompletedTask()
  }

  countCompletedTask=()=>{
    let value = this.props.todoList.filter(function(task){
      return task.completed
    }).length
    this.setState({totalCompletedTask:value+1})
  }

  handleEditTask=()=>{
    this.setState({isEditable:!this.state.isEditable})
  }

  render(){        
    return(
      <div className="App">
        <h2>TO-DO</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange} style ={{marginRight:"15px"}} />
          <input type="submit"/>
        </form>
        <ul>
          {this.props.todoList.map((todo, index) =>
           <div key={index}>
             <div>
               <span style={{marginRight:"15px"}}>{index+1}). {todo.name}</span>
               {/* <button onClick={(event)=>this.handleEditTask(event,index)} >
                  {this.state.isEditable ? "Save": "edit"}
               </button> */}
               <button>edit</button>
               <button onClick={(event)=>this.deleteTask(event,index)}>remove</button>
               <button onClick={(event)=>this.completeTask(event,index)}>
                  {todo.completed===true? "completed" : "complete"}
               </button>
             </div>
           </div> 
           )}
        </ul>
          <span>Total tasks {this.props.todoList.length}</span><br/>
          <span>Completed Tasks {this.state.totalCompletedTask}</span>
      </div>
    )
  }
}

const mapStateToProps=(state, ownProps)=>{  
  return{
    todoList:state.todoList
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{    
    createTodo: todo => dispatch(todoActions.createTodo(todo)),
    deleteTodo: id => dispatch(todoActions.deleteTodo(id)),
    completeTodo: id => dispatch(todoActions.completeTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Question2);
