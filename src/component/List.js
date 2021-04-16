import React, { Component } from 'react'
import Listimg from '../Assets/list.png'
import Delete from '../Assets/delete.png'
import Complete from '../Assets/complete.png'
import Editimg from '../Assets/edit.png'

export default class List extends Component {

    render() {
        
        return (
            <div>
            <div className="list">
                <div className="gauche">
                <img src={Listimg}></img>
                    <h6> TO-DO LIST </h6>
                </div>
                <hr className="ligne"></hr>
                
                {this.props.tasks.map((task, i) => (
                    
                    <div className="button-list">
                        
                            <button key={task.id} onClick={() => this.props.complete(task.id)}>
                                <img className="complete" src ={Complete}></img>
                                {/* {el.isCompleted ? "Undo" : "Complete"} */}
                            </button>
                            <h5 key={task.id} className={task.isCompleted ? "completed" : ""} >{task.title} </h5>
                            <hr className="sousliste"></hr> 
                            <button key={task.id} onClick={() => this.props.delete(task.id)}> <img id="delete" src ={Delete}></img> </button> 
                            <button key={task.id} onClick={() => this.props.edit(task.id)}> <img id="edit" src ={Editimg}></img> </button> 

                         
                    </div>
                    
                ))}
                </div>
                <button className="deleteall" onClick={() => this.props.deleteAll()}>DELETEALL</button>
            </div>
        )
    }
}
