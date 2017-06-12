// @flow

import { observable } from 'mobx';

const store = observable({
  ideas: [],
  name: '',
  body: '',
  quality: 'Swill',

  get getCount() {
    return this.ideas.length;
  },

  deleteIdea(id: number) {
    this.ideas = this.ideas.filter((idea: Object) => {
      return idea.id !== id;
    });
  },
});

export default store;
