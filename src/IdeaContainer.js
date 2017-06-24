// @flow

import React from 'react';
import { observer } from 'mobx-react';
import store from './store';

const IdeaContainer = observer(({ ...props }: Object) => {
  const { name, body, quality, id } = props;

  const deleteIdea = (): void => {
    store.deleteIdea(id);
  };

  const downvote = (): void => {
    store.downvote(id);
  };

  const upvote = (): void => {
    store.upvote(id);
  };

  return (
    <div className="idea-container">
      <h3 className="idea-name">{name}</h3>
      <p className="idea-description"><span className="desc-span">Description:</span> {body}</p>
      <p className="quality-description"><span className="qual-span">Quality:</span> {quality}</p>
      <div className="idea-buttons-container">
        <button className="delete-idea-button" onClick={deleteIdea}>Delete Idea</button>
        <button className="upvote-idea-button" onClick={upvote}>Upvote</button>
        <button className="downvote-idea-button" onClick={downvote}>Downvote</button>
      </div>
    </div>
  );
});

export default IdeaContainer;
