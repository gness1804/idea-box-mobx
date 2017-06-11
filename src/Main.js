import React, { Component } from 'react';
import { autorun } from 'mobx';
import store from './store';

autorun(() => {
  console.log(`There are ${store.ideas.length} ideas on the page.`); 
});

class Main extends Component {

  displayIdeas = () => {
   
  }

  render() {
    return (
      <div>
        <p>I am the Main component.</p>
        <button onClick={this.addIdea}>Submit</button>
      </div>
    );
  }
}

export default Main;
