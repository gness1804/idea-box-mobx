// @flow

import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import Idea from './Idea';
import IdeaContainer from './IdeaContainer';

const Main = observer(() => {
  let { name, body, quality } = store;
  const addIdea = (): void => {
    if (!name || !body) {
      alert('Error: you must enter in a name and a body. Please try again.');
      return;
    }
    store.ideas.push(new Idea({
      name,
      body,
      quality,
    }));
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

  return (
    <div className="container">
      <h1>Idea Box</h1>
      <div className="inputs-container">
        <input placeholder="Idea Name" onChange={changeName} />
        <input placeholder="Idea Body" onChange={changeBody} />
        <select onChange={changeQuality} defaultValue="swill">
          <option value="swill">Swill</option>
          <option value="plausible">Plausible</option>
          <option value="genius">Genius</option>
        </select>
        <button onClick={addIdea}>Submit</button>
      </div>
      <div className="ideas-output-container">
        {store.ideas.map((idea: Object) => {
          return <IdeaContainer {...idea} key={idea.id} />;
        })}
      </div>
      <p className="total-ideas-message">Total ideas on page: {store.getCount}</p>
    </div>
  );
});

export default Main;
