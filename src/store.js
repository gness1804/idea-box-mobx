import { observable, autorun } from 'mobx';

const store = observable({
  ideas: [],
  instantiateIdeas: autorun(() => {
    console.log(this.ideas);
  }),
});

export default store;
