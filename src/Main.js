import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import Idea from './Idea';
import IdeaContainer from './IdeaContainer';

const Main = observer(() => {
  let { name, body, quality } = store;
  const addIdea = () => {
    store.ideas.push(new Idea({
      name,
      body,
      quality,
    }));
  };

  const changeBody = (e) => {
    body = e.target.value;
  };

  const changeName = (e) => {
    name = e.target.value;
  };

  const changeQuality = (e) => {
    quality = e.target.value;
  };

  return (
    <div>
      <input placeholder="Idea Name" onChange={changeName} />
      <input placeholder="Idea Body" onChange={changeBody} />
      <select onChange={changeQuality} defaultValue="swill">
        <option value="swill">Swill</option>
        <option value="plausible">Plausible</option>
        <option value="genius">Genius</option>
      </select>
      <button onClick={addIdea}>Submit</button>
      {store.ideas.map((idea) => {
        return <IdeaContainer {...idea} key={idea.id} />;
      })}
      <p>Total ideas on page: {store.getCount}</p>
    </div>
  );
});

export default Main;
