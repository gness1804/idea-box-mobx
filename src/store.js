import { observable } from 'mobx';

const store = observable({
  ideas: [],
  name: '',
  get displayIdeas() {
    return this.ideas;
  },
});

export default store;
