import React, { Component } from 'react'
import axios from '../../axios-base'
import Spinner from '../UI/Spinner/Spinner'
import "./Add.css"

export class Add extends Component {
  state = {
    title: "",
    description: "",
    loading: false
  }
  inputHandler(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  async savePost(data) {
    this.setState({loading: true})
    const time = this.setTime()
    data = {...data, time};
    await axios.post("/posts.json", data);
    this.setState({title:"", description:"", loading: false})
  }
  setTime() {
    const date = new Date();
    const time = `Created on: ${date.getDate()}.${date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1}.${date.getFullYear()} ${date.getHours()+3}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()}`
    return time
  }
  render() {
  
    console.log(this.state);
    return (
      <div className="add">
        <h2>Add new post</h2>
        {this.state.loading ? <Spinner /> : (
          <>
            <p>Title</p> 
          <input 
            name="title" 
            onChange={(e) => this.inputHandler(e)} 
            value={this.state.title}
          />
          <p>Descrition</p> 
          <textarea 
            name="description" 
            onChange={(e) => this.inputHandler(e)} 
            value={this.state.description}
          />
          <button onClick={() => this.savePost(this.state)}>Save</button> 
          </>
          
        )}
        
      </div>
    )
  }
}

export default Add
