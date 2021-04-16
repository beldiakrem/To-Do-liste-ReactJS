import React, { Component } from 'react'
import Addimg from '../Assets/add.png'
import Addtask from '../Assets/addtask.png'

export default class Add extends Component {
  
    render() {
        return (
            <div className="add">
                <div className="gauche">
                <img src={Addimg}></img>
                    <h6> ADD ITEM </h6>
                </div>
                <hr className="ligne"></hr>
                <form>
                    <div className="inputbutton">
                      
                            <input type="text"
                                value={this.props.task}
                                placeholder="Enter new Task"
                                onChange={this.props.handlechange} />
                        </div>
                        
                            <button value="" onClick={e => this.props.handleAdd(e)} > <img src ={Addtask}></img> </button>
               
                   


                </form>
            </div>
        )
    }
}
