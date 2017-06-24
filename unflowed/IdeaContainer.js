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
      <h3 className="idea-name">{name}</h3>
      <p className="idea-description">Description: {body}</p>
      <p className="quality-description">Quality: {quality}</p>
      <button className="delete-idea-button" onClick={deleteIdea}>Delete Idea</button>
      <button className="upvote-idea-button" onClick={upvote}>Upvote</button>
      <button className="downvote-idea-button" onClick={downvote}>Downvote</button>
    </div>
  );
});

export default IdeaContainer;
