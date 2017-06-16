// @flow

import { observable } from 'mobx';
import upvoteProcess from './helpers/upvoteProcess';
import downvoteProcess from './helpers/downvoteProcess';
import Idea from './Idea';

const store = observable({
  ideas: [],
  name: '',
  body: '',
  quality: 'Swill',

  get getCount() {
    return this.ideas.length;
  },

  addIdea(name: string, body: string, quality: string) {
    this.ideas.push(new Idea({
      name,
      body,
      quality,
    }));
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

  sortById() {
    this.ideas = this.ideas.sort((a: Object, b: Object) => {
      return b.id - a.id;
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
