import React, { Component } from 'react';
// import { autorun } from 'mobx';
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

  changeBody = (e) => {
    store.body = e.target.value;
  }

  changeName = (e) => {
    store.name = e.target.value;
  }

  changeQuality= (e) => {
    store.quality = e.target.value;
  }

  render() {
    return (
      <div>
        <input placeholder="Idea Name" onChange={this.changeName} />
        <input placeholder="Idea Body" onChange={this.changeBody} />
        <select onChange={this.changeQuality} defaultValue="swill">
          <option value="swill">Swill</option>
          <option value="plausible">Plausible</option>
          <option value="genius">Genius</option>
        </select>
        <button onClick={this.addIdea}>Submit</button>
        {store.ideas.map((idea) => {
          return <p>{idea.title}</p>;
        })}
      </div>
    );
  }
}

export default Main;
