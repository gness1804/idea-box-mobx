//      

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

  get getCount()         {
    return this.ideas.length;
  },

  addIdea(name        , body        , quality        )       {
    const promise = new Promise((resolve) => {
      resolve(
        this.ideas.push(new Idea({
          name,
          body,
          quality,
        })),
      );
    });
    promise.then(() => { this.resetStates(); });
  },

  deleteIdea(id        )       {
    this.ideas = this.ideas.filter((idea        ) => {
      return idea.id !== id;
    });
  },

  downvote(id        )       {
    this.ideas = this.ideas.map((idea        ) => {
      if (idea.id === id) {
        Object.assign(idea, { quality: downvoteProcess(idea.quality) });
      }
      return idea;
    });
  },

  resetStates()       {
    this.name = '';
    this.body = '';
    this.quality = 'Swill';
  },

  sortById()       {
    this.ideas = this.ideas.sort((a        , b        ) => {
      return b.id - a.id;
    });
  },

  sortByQuality()       {
    const promise = new Promise((resolve) => {
      resolve(encodeIdeas(this.ideas));
    });
    promise.then((encodedIdeas               )                => {
      return encodedIdeas.sort((a        , b        ) => {
        return a.quality - b.quality;
      });
    })
    .then((sortedIdeas               )       => {
      this.ideas = decodeIdeas(sortedIdeas);
    });
  },

  upvote(id        )       {
    this.ideas = this.ideas.map((idea        ) => {
      if (idea.id === id) {
        Object.assign(idea, { quality: upvoteProcess(idea.quality) });
      }
      return idea;
    });
  },
});

export default store;
