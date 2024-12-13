export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(204, 'No Content');
    this.errors.set(404, 'Not Found');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
