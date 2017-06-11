import { observable } from 'mobx';

const store = observable({
  ideas: [],
  name: '',
  body: '',
  quality: 'Swill',
  get displayIdeas() {
    return this.ideas;
  },
});

export default store;
