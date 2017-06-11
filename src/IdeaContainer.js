import React from 'react';
import { observer } from 'mobx-react';

const IdeaContainer = observer(({ ...props }) => {
  const { name, body, quality } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{body}</p>
      <p>{quality}</p>
    </div>
  );
});

export default IdeaContainer;
