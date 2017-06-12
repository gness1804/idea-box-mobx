// @flow

import React from 'react';
import { observer } from 'mobx-react';
import store from './store';

const IdeaContainer = observer(({ ...props }: Object) => {
  const { name, body, quality, id } = props;

  const deleteIdea = () => {
    store.deleteIdea(id);
  };

  return (
    <div className="idea-container">
      <p>{name}</p>
      <p>{body}</p>
      <p>{quality}</p>
      <button onClick={deleteIdea}>Delete Idea</button>
    </div>
  );
});

export default IdeaContainer;
