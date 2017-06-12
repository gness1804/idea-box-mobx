// @flow

import React from 'react';
import { observer } from 'mobx-react';

const IdeaContainer = observer(({ ...props }: Object) => {
  const { name, body, quality } = props;

  return (
    <div className="idea-container">
      <p>{name}</p>
      <p>{body}</p>
      <p>{quality}</p>
    </div>
  );
});

export default IdeaContainer;
