class Idea {
  constructor(options) {
    this.name = options.name || '';
    this.body = options.body || '';
    this.quality = options.quality || '';
  }
}

export default Idea;
