import React, { Component } from 'react';
import { autorun } from 'mobx';
import store from './store';

autorun(() => {

});

class Main extends Component {

  addIdea = () => {
    store.ideas.push({
      name: store.name,
    });
  }

  changeName = (e) => {
    store.name = e.target.value;
  }

  render() {
    return (
      <div>
        <input placeholder="Idea Name" onChange={this.changeName} />
        <button onClick={this.addIdea}>Submit</button>
      </div>
    );
  }
}

export default Main;
