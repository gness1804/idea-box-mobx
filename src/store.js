// @flow

import { observable } from 'mobx';
import upvoteProcess from './helpers/upvoteProcess';
import downvoteProcess from './helpers/downvoteProcess';

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

  downvote(id: number) {
    this.ideas = this.ideas.map((idea: Object) => {
      if (idea.id === id) {
        Object.assign(idea, { quality: downvoteProcess(idea.quality) });
      }
      return idea;
    });
  },

  upvote(id: number) {
    this.ideas = this.ideas.map((idea: Object) => {
      if (idea.id === id) {
        Object.assign(idea, { quality: upvoteProcess(idea.quality) });
      }
      return idea;
    });
  },
});

export default store;
