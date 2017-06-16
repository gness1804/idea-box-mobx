// @flow

import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import IdeaContainer from './IdeaContainer';

const Main = observer(() => {
  let { name, body, quality } = store;
  const { ideas, getCount } = store;
  let ideasDisplay;
  const addIdea = (): void => {
    if (!name || !body) {
      alert('Error: you must enter in a name and a body. Please try again.');
      return;
    }
    store.addIdea(name, body, quality);
  };

  const changeBody = (e: Object) => {
    body = e.target.value;
  };

  const changeName = (e: Object) => {
    name = e.target.value;
  };

  const changeQuality = (e: Object) => {
    quality = e.target.value;
  };

  if (ideas.length) {
    ideasDisplay = ideas.map((idea: Object) => {
      return (
        <div className="ideas-output-container" key={idea.id}>
          <IdeaContainer {...idea} />
        </div>);
    });
  } else {
    ideasDisplay = <p className="no-ideas-message">No ideas yet. Please enter one in now.</p>;
  }

  return (
    <div className="container">
      <h1>Idea Box</h1>
      <div className="inputs-container">
        <input placeholder="Idea Name" onChange={changeName} />
        <input placeholder="Idea Body" onChange={changeBody} />
        <select onChange={changeQuality} defaultValue="swill">
          <option value="Swill">Swill</option>
          <option value="Plausible">Plausible</option>
          <option value="Genius">Genius</option>
        </select>
        <button onClick={addIdea}>Submit</button>
      </div>
      <button>Sort by Recency</button>
      {ideasDisplay}
      <p className="total-ideas-message">Total ideas on page: {getCount}</p>
    </div>
  );
});

export default Main;
