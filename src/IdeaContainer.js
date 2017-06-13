// @flow

import React from 'react';
import { observer } from 'mobx-react';
import store from './store';

const IdeaContainer = observer(({ ...props }: Object) => {
  const { name, body, quality, id } = props;

  const deleteIdea = (): void => {
    store.deleteIdea(id);
  };

  const upvote = (): void => {
    store.upvote(id);
  };

  return (
    <div className="idea-container">
      <h3>{name}</h3>
      <p>Description: {body}</p>
      <p>Quality: {quality}</p>
      <button onClick={deleteIdea}>Delete Idea</button>
      <button onClick={upvote}>Upvote</button>
    </div>
  );
});

export default IdeaContainer;
