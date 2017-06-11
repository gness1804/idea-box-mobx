import React from 'react';
import { observer } from 'mobx-react';
import store from './store';
import Idea from './Idea';

const Main = observer(() => {
  let { name, body, quality } = store;
  const addIdea = () => {
    store.ideas.push(new Idea({
      name,
      body,
      quality,
    }));
  };

  const changeBody = (e) => {
    body = e.target.value;
  };

  const changeName = (e) => {
    name = e.target.value;
  };

  const changeQuality = (e) => {
    quality = e.target.value;
  };

  return (
    <div>
      <input placeholder="Idea Name" onChange={changeName} />
      <input placeholder="Idea Body" onChange={changeBody} />
      <select onChange={changeQuality} defaultValue="swill">
        <option value="swill">Swill</option>
        <option value="plausible">Plausible</option>
        <option value="genius">Genius</option>
      </select>
      <button onClick={addIdea}>Submit</button>
      {store.ideas.map((idea) => {
        return <p>{idea.quality}</p>;
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
