import { observable } from 'mobx';

const store = observable({
  ideas: [{hello: 'world'}],
  get displayIdeas() {
    return this.ideas;
  },
});

export default store;
