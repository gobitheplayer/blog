import React, { Component } from 'react'
import PostPreview from './PostPreview/PostPreview'
import axios from '../../axios-base'
import "./Home.css"

export class Home extends Component {
  state = {
    posts: [],
  }
  componentDidMount() {
    this.getPosts()
  }
  async getPosts() {
    let posts = [];
    const data = await axios.get("/posts.json");
    if(data.data) {
      const keys = Object.keys(data.data);
      keys.map(key => {
        posts.push({...data.data[key], id: key})
      })
      this.setState({posts})
    }
  }
  historyChangeHandler(id) {
    this.props.history.push("/posts/?" + encodeURI(id))
  }

  render() {
    return (
      <div className="home">
        <h1 className="home__title">My Blog</h1>
        <div className="postSection">
          {this.state.posts && 
          this.state.posts.map(post => <PostPreview
          history={() => this.historyChangeHandler(post.id)} 
          key={post.id}
          time={post.time}
          title={post.title} 
          description={post.description}
          />)}
        </div>
        
        
      </div>
    )
  }
}

export default Home
