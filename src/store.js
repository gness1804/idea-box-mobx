// @flow

import { observable } from 'mobx';
import upvoteProcess from './helpers/upvoteProcess';
import downvoteProcess from './helpers/downvoteProcess';
import encodeIdeas from './helpers/encodeIdeas';
import decodeIdeas from './helpers/decodeIdeas';
import Idea from './Idea';

const store = observable({
  ideas: [],
  name: '',
  body: '',
  quality: 'Swill',

  get getCount(): number {
    return this.ideas.length;
  },

  addIdea(name: string, body: string, quality: string): void {
    this.ideas.push(new Idea({
      name,
      body,
      quality,
    }));
  },

  deleteIdea(id: number): void {
    this.ideas = this.ideas.filter((idea: Object) => {
      return idea.id !== id;
    });
  },

  downvote(id: number): void {
    this.ideas = this.ideas.map((idea: Object) => {
      if (idea.id === id) {
        Object.assign(idea, { quality: downvoteProcess(idea.quality) });
      }
      return idea;
    });
  },

  sortById(): void {
    this.ideas = this.ideas.sort((a: Object, b: Object) => {
      return b.id - a.id;
    });
  },

  sortByQuality(): void {
    const promise = new Promise((resolve) => {
      resolve(encodeIdeas(this.ideas));
    });
    promise.then((encodedIdeas: Array<Object>): Array<Object> => {
      return encodedIdeas.sort((a: Object, b: Object) => {
        return a.quality - b.quality;
      });
    })
    .then((sortedIdeas: Array<Object>): void => {
      this.ideas = decodeIdeas(sortedIdeas);
    });
  },

  upvote(id: number): void {
    this.ideas = this.ideas.map((idea: Object) => {
      if (idea.id === id) {
        Object.assign(idea, { quality: upvoteProcess(idea.quality) });
      }
      return idea;
    });
  },
});

export default store;
