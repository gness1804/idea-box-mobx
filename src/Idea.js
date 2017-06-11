// @flow

class Idea {
  constructor(options: Object) {
    this.id = Date.now();
    this.name = options.name || '';
    this.body = options.body || '';
    this.quality = options.quality || '';
  }

  id: number;
  name: string;
  body: string;
  quality: string;
}

export default Idea;
