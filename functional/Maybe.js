/* Based on https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch8.html#schrödingers-maybe */

class Maybe {
  constructor(value) {
    this._value = value;
  }
  
  of(value) {
    return new Maybe(value);
  }
  
  isNothing() {
    return (this._value === undefined || this._value === null);
  }
  
  map(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this._value));
  }
}
