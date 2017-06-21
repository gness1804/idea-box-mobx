//      

import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import IdeaContainer from './IdeaContainer';

const Main = observer(() => {
  let { name, body, quality } = store;
  const { ideas, getCount } = store;
  let nameInput = null;
  let bodyInput = null;
  let qualityInput = null;
  let ideasDisplay;

  const addIdea = ()       => {
    if (!name || !body) {
      document.getElementById('error-mssg').innerText = 'Error: you must enter in a name and a body. Please try again.';
      return;
    }
    store.addIdea(name, body, quality);
    nameInput.value = '';
    bodyInput.value = '';
    qualityInput.value = 'Swill';
    document.getElementById('error-mssg').innerText = '';
  };

  const changeBody = (e        )       => {
    body = e.target.value;
  };

  const changeName = (e        )       => {
    name = e.target.value;
  };

  const changeQuality = (e        )       => {
    quality = e.target.value;
  };

  const sortById = ()       => {
    store.sortById();
  };

  const sortByQuality = ()       => {
    store.sortByQuality();
  };

  if (ideas.length) {
    ideasDisplay = ideas.map((idea        ) => {
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
      <p id="error-mssg" />
      <div className="inputs-container">
        <input
          id="name-input"
          placeholder="Idea Name"
          onChange={changeName}
          ref={(input) => { nameInput = input; }}
        />
        <input
          id="body-input"
          placeholder="Idea Body"
          onChange={changeBody}
          ref={(input) => { bodyInput = input; }}
        />
        <select
          id="quality-field"
          onChange={changeQuality}
          defaultValue="Swill"
          ref={(input) => { qualityInput = input; }}
        >
          <option value="Swill">Swill</option>
          <option value="Plausible">Plausible</option>
          <option value="Genius">Genius</option>
        </select>
        <button id="main-button" onClick={addIdea}>Submit</button>
      </div>
      <button onClick={sortById}>Sort by Recency</button>
      <button onClick={sortByQuality}>Sort by Quality</button>
      {ideasDisplay}
      <p className="total-ideas-message">Total ideas on page: {getCount}</p>
    </div>
  );
});

export default Main;
