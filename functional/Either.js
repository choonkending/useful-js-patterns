class Left {
  constructor(x) {
    this._value = x;
  }
  of(x) {
    return new Left(x);
  }
  map(f) {
    return this;
  }
}

class Right {
  constructor(x) {
    this._value = x;
  }
  of(x) {
    return new Right(x);
  }
  map(f) {
    return this.of(f(this._value));
  }
}
