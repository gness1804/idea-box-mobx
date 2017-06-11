import React, { Component } from 'react';
import store from './store';
import Idea from './Idea';

class Main extends Component {

  addIdea = () => {
    store.ideas.push(new Idea({
      name: store.name,
      body: store.body,
      quality: store.quality,
    }));
  }

  changeName = (e) => {
    store.name = e.target.value;
  }

  render() {
    return (
      <div>
        <input placeholder="Idea Name" onChange={this.changeName} />
        <button onClick={this.addIdea}>Submit</button>
        {store.ideas.map((idea) => {
          return <p>{idea.title}</p>;
        })}
      </div>
    );
  }
}

export default Main;
