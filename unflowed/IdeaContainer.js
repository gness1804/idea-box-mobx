//      

import React from 'react';
import { observer } from 'mobx-react';
import store from './store';

const IdeaContainer = observer(({ ...props }        ) => {
  const { name, body, quality, id } = props;

  const deleteIdea = ()       => {
    store.deleteIdea(id);
  };

  const downvote = ()       => {
    store.downvote(id);
  };

  const upvote = ()       => {
    store.upvote(id);
  };

  return (
    <div className="idea-container">
      <h3>{name}</h3>
      <p>Description: {body}</p>
      <p>Quality: {quality}</p>
      <button onClick={deleteIdea}>Delete Idea</button>
      <button onClick={upvote}>Upvote</button>
      <button onClick={downvote}>Downvote</button>
    </div>
  );
});

export default IdeaContainer;
