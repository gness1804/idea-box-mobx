import { observable } from 'mobx';

const store = observable({
  ideas: [],
  name: '',
  body: '',
  quality: 'Swill',

  get getCount() {
    return this.ideas.length;
  },
});

export default store;
