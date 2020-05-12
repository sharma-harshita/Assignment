import React, { Component } from 'react';
import '../App.css';

class Question1 extends Component{
  constructor(props){
    super(props);
    this.state={
      sports:[{ id : 1, name: "cricket"},
      { id : 2, name : "football"},
      { id : 3, name : "golf"},
      { id : 4, name : "table-tennis"},
      { id : 5, name : "badminton"},
      { id : 6, name : "pool"},
      { id : 7, name : "baseball"},
      { id : 8, name : "basketball"}],
      filteredSports:[]
    }
  }

  handleSearchValue=(event)=>{
    const updatedList = this.state.sports.filter(item=>{
      return item.name.toLowerCase().search(event.target.value.toLowerCase()) !==-1
    })
    this.setState({filteredSports:updatedList})
  }

  render(){
    return(
      <div className="App">
        <h2>Sports List</h2>
        <input placeholder="Search" onChange={this.handleSearchValue}/>
        {this.state.filteredSports.length===0 
        ?
        this.state.sports.map((value, index)=>(<div key={index}>{value.name}</div>))
        :
        this.state.filteredSports.map((value, index)=>(<div key={index}>{value.name}</div>))
        }
        </div>
    )
  }
}

export default Question1;
