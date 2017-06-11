import { observable } from 'mobx';

const store = observable({
  ideas: [],
  get displayIdeas() {
    return this.ideas;
  },
});

export default store;
