import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import Idea from './Idea';

const Main = observer(() => {
  const addIdea = () => {
    store.ideas.push(new Idea({
      name: 'test',
      body: store.body,
      quality: store.quality,
    }));
  };

  return (
    <div>
      <input placeholder="Idea Name" onChange={this.changeName} />
      <input placeholder="Idea Body" onChange={this.changeBody} />
      <select onChange={this.changeQuality} defaultValue="swill">
        <option value="swill">Swill</option>
        <option value="plausible">Plausible</option>
        <option value="genius">Genius</option>
      </select>
      <button onClick={addIdea}>Submit</button>
      {store.ideas.map((idea) => {
        return <p>{idea.name}</p>;
      })}
    </div>
  );
});

export default Main;

// class Main extends Component {

//   addIdea = () => {
//     store.ideas.push(new Idea({
//       name: store.name,
//       body: store.body,
//       quality: store.quality,
//     }));
//   }

//   changeBody = (e) => {
//     store.body = e.target.value;
//   }

//   changeName = (e) => {
//     store.name = e.target.value;
//   }

//   changeQuality= (e) => {
//     store.quality = e.target.value;
//   }

//   render() {
    // return (
    //   <div>
    //     <input placeholder="Idea Name" onChange={this.changeName} />
    //     <input placeholder="Idea Body" onChange={this.changeBody} />
    //     <select onChange={this.changeQuality} defaultValue="swill">
    //       <option value="swill">Swill</option>
    //       <option value="plausible">Plausible</option>
    //       <option value="genius">Genius</option>
    //     </select>
    //     <button onClick={this.addIdea}>Submit</button>
    //     {store.ideas.map((idea) => {
    //       return <p>{idea.title}</p>;
    //     })}
    //   </div>
    // );
//   }
// }

// export default Main;
