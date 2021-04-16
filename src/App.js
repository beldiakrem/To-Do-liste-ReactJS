import React, { Component } from 'react';
import "./App.css"
import Add from './component/Add';
import List from './component/List';

export default class App extends Component {

constructor(){
  super();
  this.state = {
    tasks:[],
    task: "",
    edittask: false,
  };
}

handlechange = e => {
  this.setState({
    task: e.target.value
  })
}
handleAdd = e => {
  e.preventDefault();
  
  const newTask= {
      id: Date.now(),
      title: this.state.task,
      isCompleted: false,
  };
  const updateTask = [...this.state.tasks, newTask]
  this.setState({
    tasks: updateTask,
    task: "",
    edittask: false,
  });
};

  deleteTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(e => 
        e.id !== id
        )
    });
  };

  deleteAll = () =>{
    this.setState ({
      tasks:[]
    })
  }

  completeTask = id => {
    this.setState({
      tasks: this.state.tasks.map(e =>
        e.id === id ? { ...e, isCompleted: !e.isCompleted } : e
      )
    });
  };

  editTask = id => {
    const filterTask = this.state.tasks.filter(e => 
      e.id !== id
      );
    const selectTask = this.state.tasks.find(e => 
      e.id === id );
    console.log(selectTask)
     this.setState({
       tasks: filterTask,
      task: selectTask.title
     });
   
  }

  render() {
    return (
      <div>
      
        <h1 id="monliste"> Mon liste </h1>
        
        <div>
        <Add task={this.state.task}
        handlechange={this.handlechange}
        handleAdd={this.handleAdd} />
        <List tasks={this.state.tasks}
              delete={this.deleteTask}
              complete={this.completeTask}
              newComplete={this.addcomplete}
              deleteAll={this.deleteAll}
              edit={this.editTask}
              />
      </div>
      </div>
    )
  }
}

